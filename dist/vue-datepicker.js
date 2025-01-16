import { useAttrs as Qn, openBlock as A, createElementBlock as V, createElementVNode as ye, unref as s, reactive as qt, computed as Q, ref as ee, toRef as Vt, watch as lt, defineComponent as Ue, onMounted as We, onUnmounted as Xt, renderSlot as ue, normalizeProps as ze, mergeProps as He, Fragment as ke, normalizeStyle as nt, createCommentVNode as J, createTextVNode as pt, toDisplayString as Ke, onBeforeUpdate as qn, nextTick as at, normalizeClass as De, withModifiers as jt, renderList as Oe, withDirectives as oa, vShow as sa, createBlock as Ae, withCtx as we, withKeys as Xn, createVNode as tt, Transition as Et, createSlots as Ge, useSlots as Rt, guardReactiveProps as Je, resolveDynamicComponent as ca, h as Jn, render as tn, getCurrentScope as Zn, onScopeDispose as xn, isRef as an, Teleport as el } from "vue";
import { format as ct, isEqual as Bt, set as Pe, startOfMonth as tl, isAfter as _t, getYear as fe, getMonth as Me, setMonth as al, setYear as dt, addMonths as Tt, subMonths as Kt, isValid as ua, isBefore as Gt, eachDayOfInterval as yn, setHours as nl, setMinutes as ll, setSeconds as hn, setMilliseconds as bn, getHours as gt, getMinutes as wt, getSeconds as Yt, startOfWeek as Ha, endOfWeek as kn, parse as Ea, isDate as rl, addHours as ol, addYears as wn, subYears as Dn, endOfYear as Mn, startOfYear as ia, differenceInYears as sl, add as $n, sub as ul, getWeek as il, getISOWeek as dl, addDays as At, isSameQuarter as nn, eachQuarterOfInterval as cl, startOfQuarter as fl, endOfQuarter as ln, getQuarter as rn, getDay as vl, differenceInCalendarDays as ml } from "date-fns";
function Ft() {
  const e = Qn();
  return A(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img",
      ...e
    },
    [
      ye("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      ye("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ye("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      ye("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
Ft.compatConfig = {
  MODE: 3
};
function An() {
  return A(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      ye("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
An.compatConfig = {
  MODE: 3
};
function Ua() {
  return A(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
Ua.compatConfig = {
  MODE: 3
};
function Wa() {
  return A(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
Wa.compatConfig = {
  MODE: 3
};
function Va() {
  return A(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      ye("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
Va.compatConfig = {
  MODE: 3
};
function ja() {
  return A(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
ja.compatConfig = {
  MODE: 3
};
function Ka() {
  return A(), V(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon",
      role: "img"
    },
    [
      ye("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
Ka.compatConfig = {
  MODE: 3
};
const Ze = (e, t) => t ? new Date(e.toLocaleString("en-US", { timeZone: t })) : new Date(e), Ga = (e, t, r) => {
  const a = Fa(e, t, r);
  return a || U();
}, pl = (e, t, r) => {
  const a = t.dateInTz ? Ze(new Date(e), t.dateInTz) : U(e);
  return r ? Xe(a, !0) : a;
}, Fa = (e, t, r) => {
  if (!e) return null;
  const a = r ? Xe(U(e), !0) : U(e);
  return t ? t.exactMatch ? pl(e, t, r) : Ze(a, t.timezone) : a;
}, gl = (e, t) => {
  if (!e) return 0;
  const r = /* @__PURE__ */ new Date(), a = new Date(r.toLocaleString("en-US", { timeZone: "UTC" })), n = new Date(r.toLocaleString("en-US", { timeZone: e })), d = (t ?? n).getTimezoneOffset() / 60;
  return (+a - +n) / (1e3 * 60 * 60) - d;
};
var rt = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e))(rt || {}), ot = /* @__PURE__ */ ((e) => (e.top = "top", e.bottom = "bottom", e))(ot || {}), St = /* @__PURE__ */ ((e) => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(St || {}), je = /* @__PURE__ */ ((e) => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(je || {});
const yl = ["timestamp", "date", "iso"];
var Qe = /* @__PURE__ */ ((e) => (e.up = "up", e.down = "down", e.left = "left", e.right = "right", e))(Qe || {}), Ce = /* @__PURE__ */ ((e) => (e.arrowUp = "ArrowUp", e.arrowDown = "ArrowDown", e.arrowLeft = "ArrowLeft", e.arrowRight = "ArrowRight", e.enter = "Enter", e.space = " ", e.esc = "Escape", e.tab = "Tab", e.home = "Home", e.end = "End", e.pageUp = "PageUp", e.pageDown = "PageDown", e))(Ce || {});
function on(e) {
  return (t) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`)).slice(0, 2);
}
function hl(e) {
  return (t) => ct(Ze(/* @__PURE__ */ new Date(`2017-01-0${t}T00:00:00+00:00`), "UTC"), "EEEEEE", { locale: e });
}
const bl = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7];
  let n;
  if (e !== null)
    try {
      n = a.map(hl(e));
    } catch {
      n = a.map(on(t));
    }
  else
    n = a.map(on(t));
  const d = n.slice(0, r), f = n.slice(r + 1, n.length);
  return [n[r]].concat(...f).concat(...d);
}, Qa = (e, t, r) => {
  const a = [];
  for (let n = +e[0]; n <= +e[1]; n++)
    a.push({ value: +n, text: Rn(n, t) });
  return r ? a.reverse() : a;
}, Tn = (e, t, r) => {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((d) => {
    const f = d < 10 ? `0${d}` : d;
    return /* @__PURE__ */ new Date(`2017-${f}-01T00:00:00+00:00`);
  });
  if (e !== null)
    try {
      const d = r === "long" ? "LLLL" : "LLL";
      return a.map((f, g) => {
        const Y = ct(Ze(f, "UTC"), d, { locale: e });
        return {
          text: Y.charAt(0).toUpperCase() + Y.substring(1),
          value: g
        };
      });
    } catch {
    }
  const n = new Intl.DateTimeFormat(t, { month: r, timeZone: "UTC" });
  return a.map((d, f) => {
    const g = n.format(d);
    return {
      text: g.charAt(0).toUpperCase() + g.substring(1),
      value: f
    };
  });
}, kl = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], Le = (e) => {
  const t = s(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, wl = (e) => ({ type: "dot", ...e ?? {} }), Sn = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, qa = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ne = (e) => e, sn = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, un = (e) => e === null, Pn = (e) => {
  if (e)
    return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0];
}, Dl = (e) => {
  const t = [], r = (a) => a.filter((n) => n);
  for (let a = 0; a < e.length; a += 3) {
    const n = [e[a], e[a + 1], e[a + 2]];
    t.push(r(n));
  }
  return t;
}, Qt = (e, t, r) => {
  const a = r != null, n = t != null;
  if (!a && !n) return !1;
  const d = +r, f = +t;
  return a && n ? +e > d || +e < f : a ? +e > d : n ? +e < f : !1;
}, It = (e, t) => Dl(e).map((r) => r.map((a) => {
  const { active: n, disabled: d, isBetween: f, highlighted: g } = t(a);
  return {
    ...a,
    active: n,
    disabled: d,
    className: {
      dp__overlay_cell_active: n,
      dp__overlay_cell: !n,
      dp__overlay_cell_disabled: d,
      dp__overlay_cell_pad: !0,
      dp__overlay_cell_active_disabled: d && n,
      dp__cell_in_between: f,
      "dp--highlighted": g
    }
  };
})), bt = (e, t, r = !1) => {
  e && t.allowStopPropagation && (r && e.stopImmediatePropagation(), e.stopPropagation());
}, Ml = () => [
  "a[href]",
  "area[href]",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
  "[data-datepicker-instance]"
].join(", ");
function $l(e, t) {
  let r = [...document.querySelectorAll(Ml())];
  r = r.filter((n) => !e.contains(n) || n.hasAttribute("data-datepicker-instance"));
  const a = r.indexOf(e);
  if (a >= 0 && (t ? a - 1 >= 0 : a + 1 <= r.length))
    return r[a + (t ? -1 : 1)];
}
const La = (e, t) => e == null ? void 0 : e.querySelector(`[data-dp-element="${t}"]`), Rn = (e, t) => new Intl.NumberFormat(t, { useGrouping: !1, style: "decimal" }).format(e), Xa = (e) => ct(e, "dd-MM-yyyy"), Ta = (e) => Array.isArray(e), da = (e, t) => t.get(Xa(e)), Al = (e, t) => e ? t ? t instanceof Map ? !!da(e, t) : t(U(e)) : !1 : !0, qe = (e, t, r = !1, a) => {
  if (e.key === Ce.enter || e.key === Ce.space)
    return r && e.preventDefault(), t();
  if (a) return a(e);
}, dn = () => ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].some(
  (e) => navigator.userAgent.includes(e)
) || navigator.userAgent.includes("Mac") && "ontouchend" in document, cn = (e, t, r, a, n, d) => {
  const f = Ea(e, t.slice(0, e.length), /* @__PURE__ */ new Date(), { locale: d });
  return ua(f) && rl(f) ? a || n ? f : Pe(f, {
    hours: +r.hours,
    minutes: +(r == null ? void 0 : r.minutes),
    seconds: +(r == null ? void 0 : r.seconds),
    milliseconds: 0
  }) : null;
}, Tl = (e, t, r, a, n, d) => {
  const f = Array.isArray(r) ? r[0] : r;
  if (typeof t == "string")
    return cn(e, t, f, a, n, d);
  if (Array.isArray(t)) {
    let g = null;
    for (const Y of t)
      if (g = cn(e, Y, f, a, n, d), g)
        break;
    return g;
  }
  return typeof t == "function" ? t(e) : null;
}, U = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), Sl = (e, t, r) => {
  if (t) {
    const n = (e.getMonth() + 1).toString().padStart(2, "0"), d = e.getDate().toString().padStart(2, "0"), f = e.getHours().toString().padStart(2, "0"), g = e.getMinutes().toString().padStart(2, "0"), Y = r ? e.getSeconds().toString().padStart(2, "0") : "00";
    return `${e.getFullYear()}-${n}-${d}T${f}:${g}:${Y}.000Z`;
  }
  const a = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(a).toISOString();
}, Xe = (e, t) => {
  const r = U(JSON.parse(JSON.stringify(e))), a = Pe(r, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });
  return t ? tl(a) : a;
}, kt = (e, t, r, a) => {
  let n = e ? U(e) : U();
  return (t || t === 0) && (n = nl(n, +t)), (r || r === 0) && (n = ll(n, +r)), (a || a === 0) && (n = hn(n, +a)), bn(n, 0);
}, _e = (e, t) => !e || !t ? !1 : Gt(Xe(e), Xe(t)), $e = (e, t) => !e || !t ? !1 : Bt(Xe(e), Xe(t)), Ie = (e, t) => !e || !t ? !1 : _t(Xe(e), Xe(t)), fa = (e, t, r) => e != null && e[0] && (e != null && e[1]) ? Ie(r, e[0]) && _e(r, e[1]) : e != null && e[0] && t ? Ie(r, e[0]) && _e(r, t) || _e(r, e[0]) && Ie(r, t) : !1, st = (e) => {
  const t = Pe(new Date(e), { date: 1 });
  return Xe(t);
}, Sa = (e, t, r) => t && (r || r === 0) ? Object.fromEntries(
  ["hours", "minutes", "seconds"].map((a) => a === t ? [a, r] : [a, isNaN(+e[a]) ? void 0 : +e[a]])
) : {
  hours: isNaN(+e.hours) ? void 0 : +e.hours,
  minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
  seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
}, Pt = (e) => ({
  hours: gt(e),
  minutes: wt(e),
  seconds: Yt(e)
}), Cn = (e, t) => {
  if (t) {
    const r = fe(U(t));
    if (r > e) return 12;
    if (r === e) return Me(U(t));
  }
}, On = (e, t) => {
  if (t) {
    const r = fe(U(t));
    return r < e ? -1 : r === e ? Me(U(t)) : void 0;
  }
}, Nt = (e) => {
  if (e) return fe(U(e));
}, Bn = (e, t) => {
  const r = Ie(e, t) ? t : e, a = Ie(t, e) ? t : e;
  return yn({ start: r, end: a });
}, Pl = (e) => {
  const t = Tt(e, 1);
  return { month: Me(t), year: fe(t) };
}, vt = (e, t) => {
  const r = Ha(e, { weekStartsOn: +t }), a = kn(e, { weekStartsOn: +t });
  return [r, a];
}, _n = (e, t) => {
  const r = {
    hours: gt(U()),
    minutes: wt(U()),
    seconds: t ? Yt(U()) : 0
  };
  return Object.assign(r, e);
}, ht = (e, t, r) => [Pe(U(e), { date: 1 }), Pe(U(), { month: t, year: r, date: 1 })], mt = (e, t, r) => {
  let a = e ? U(e) : U();
  return (t || t === 0) && (a = al(a, t)), r && (a = dt(a, r)), a;
}, Yn = (e, t, r, a, n) => {
  if (!a || n && !t || !n && !r) return !1;
  const d = n ? Tt(e, 1) : Kt(e, 1), f = [Me(d), fe(d)];
  return n ? !Cl(...f, t) : !Rl(...f, r);
}, Rl = (e, t, r) => _e(...ht(r, e, t)) || $e(...ht(r, e, t)), Cl = (e, t, r) => Ie(...ht(r, e, t)) || $e(...ht(r, e, t)), In = (e, t, r, a, n, d, f) => {
  if (typeof t == "function" && !f) return t(e);
  const g = r ? { locale: r } : void 0;
  return Array.isArray(e) ? `${ct(e[0], d, g)}${n && !e[1] ? "" : a}${e[1] ? ct(e[1], d, g) : ""}` : ct(e, d, g);
}, Ct = (e) => {
  if (e) return null;
  throw new Error(qa.prop("partial-range"));
}, la = (e, t) => {
  if (t) return e();
  throw new Error(qa.prop("range"));
}, za = (e) => Array.isArray(e) ? ua(e[0]) && (e[1] ? ua(e[1]) : !0) : e ? ua(e) : !1, Ol = (e, t) => Pe(t ?? U(), {
  hours: +e.hours || 0,
  minutes: +e.minutes || 0,
  seconds: +e.seconds || 0
}), Pa = (e, t, r, a) => {
  if (!e) return !0;
  if (a) {
    const n = r === "max" ? Gt(e, t) : _t(e, t), d = { seconds: 0, milliseconds: 0 };
    return n || Bt(Pe(e, d), Pe(t, d));
  }
  return r === "max" ? e.getTime() <= t.getTime() : e.getTime() >= t.getTime();
}, Ra = (e, t, r) => e ? Ol(e, t) : U(r ?? t), fn = (e, t, r, a, n) => {
  if (Array.isArray(a)) {
    const f = Ra(e, a[0], t), g = Ra(e, a[1], t);
    return Pa(a[0], f, r, !!t) && Pa(a[1], g, r, !!t) && n;
  }
  const d = Ra(e, a, t);
  return Pa(a, d, r, !!t) && n;
}, Ca = (e) => Pe(U(), Pt(e)), Bl = (e, t) => e instanceof Map ? Array.from(e.values()).filter((r) => fe(U(r)) === t).map((r) => Me(r)) : [], _l = (e, t, r) => {
  if (e instanceof Map) {
    const a = Array.from(e.values()).filter((n) => fe(U(n)) === t).map((n) => Me(n));
    return a.length ? a.includes(r) : !0;
  }
  return !0;
}, Nn = (e, t, r) => typeof e == "function" ? e({ month: t, year: r }) : !!e.months.find((a) => a.month === t && a.year === r), Ja = (e, t) => typeof e == "function" ? e(t) : e.years.includes(t), En = (e) => ct(e, "yyyy-MM-dd"), Ut = qt({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), Fn = () => {
  const e = (a) => {
    Ut.menuFocused = a;
  }, t = (a) => {
    Ut.shiftKeyInMenu !== a && (Ut.shiftKeyInMenu = a);
  };
  return {
    control: Q(() => ({ shiftKeyInMenu: Ut.shiftKeyInMenu, menuFocused: Ut.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
}, Re = qt({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), Oa = ee(null), ra = ee(!1), Ba = ee(!1), _a = ee(!1), Ya = ee(!1), Ve = ee(0), Ye = ee(0), Dt = () => {
  const e = Q(() => ra.value ? [...Re.selectionGrid, Re.actionRow].filter((c) => c.length) : Ba.value ? [
    ...Re.timePicker[0],
    ...Re.timePicker[1],
    Ya.value ? [] : [Oa.value],
    Re.actionRow
  ].filter((c) => c.length) : _a.value ? [...Re.monthPicker, Re.actionRow] : [Re.monthYear, ...Re.calendar, Re.time, Re.actionRow].filter((c) => c.length)), t = (c) => {
    Ve.value = c ? Ve.value + 1 : Ve.value - 1;
    let N = null;
    e.value[Ye.value] && (N = e.value[Ye.value][Ve.value]), !N && e.value[Ye.value + (c ? 1 : -1)] ? (Ye.value = Ye.value + (c ? 1 : -1), Ve.value = c ? 0 : e.value[Ye.value].length - 1) : N || (Ve.value = c ? Ve.value - 1 : Ve.value + 1);
  }, r = (c) => {
    if (Ye.value === 0 && !c || Ye.value === e.value.length && c) return;
    Ye.value = c ? Ye.value + 1 : Ye.value - 1, e.value[Ye.value] ? e.value[Ye.value] && !e.value[Ye.value][Ve.value] && Ve.value !== 0 && (Ve.value = e.value[Ye.value].length - 1) : Ye.value = c ? Ye.value - 1 : Ye.value + 1;
  }, a = (c) => {
    let N = null;
    e.value[Ye.value] && (N = e.value[Ye.value][Ve.value]), N ? N.focus({ preventScroll: !ra.value }) : Ve.value = c ? Ve.value - 1 : Ve.value + 1;
  }, n = () => {
    t(!0), a(!0);
  }, d = () => {
    t(!1), a(!1);
  }, f = () => {
    r(!1), a(!0);
  }, g = () => {
    r(!0), a(!0);
  }, Y = (c, N) => {
    Re[N] = c;
  }, y = (c, N) => {
    Re[N] = c;
  }, m = () => {
    Ve.value = 0, Ye.value = 0;
  };
  return {
    buildMatrix: Y,
    buildMultiLevelMatrix: y,
    setTimePickerBackRef: (c) => {
      Oa.value = c;
    },
    setSelectionGrid: (c) => {
      ra.value = c, m(), c || (Re.selectionGrid = []);
    },
    setTimePicker: (c, N = !1) => {
      Ba.value = c, Ya.value = N, m(), c || (Re.timePicker[0] = [], Re.timePicker[1] = []);
    },
    setTimePickerElements: (c, N = 0) => {
      Re.timePicker[N] = c;
    },
    arrowRight: n,
    arrowLeft: d,
    arrowUp: f,
    arrowDown: g,
    clearArrowNav: () => {
      Re.monthYear = [], Re.calendar = [], Re.time = [], Re.actionRow = [], Re.selectionGrid = [], Re.timePicker[0] = [], Re.timePicker[1] = [], ra.value = !1, Ba.value = !1, Ya.value = !1, _a.value = !1, m(), Oa.value = null;
    },
    setMonthPicker: (c) => {
      _a.value = c, m();
    },
    refSets: Re
    // exposed for testing
  };
}, vn = (e) => ({
  menuAppearTop: "dp-menu-appear-top",
  menuAppearBottom: "dp-menu-appear-bottom",
  open: "dp-slide-down",
  close: "dp-slide-up",
  next: "calendar-next",
  previous: "calendar-prev",
  vNext: "dp-slide-up",
  vPrevious: "dp-slide-down",
  ...e ?? {}
}), Yl = (e) => ({
  toggleOverlay: "Toggle overlay",
  menu: "Datepicker menu",
  input: "Datepicker input",
  openTimePicker: "Open time picker",
  closeTimePicker: "Close time Picker",
  incrementValue: (t) => `Increment ${t}`,
  decrementValue: (t) => `Decrement ${t}`,
  openTpOverlay: (t) => `Open ${t} overlay`,
  amPmButton: "Switch AM/PM mode",
  openYearsOverlay: "Open years overlay",
  openMonthsOverlay: "Open months overlay",
  nextMonth: "Next month",
  prevMonth: "Previous month",
  nextYear: "Next year",
  prevYear: "Previous year",
  day: void 0,
  weekDay: void 0,
  clearInput: "Clear value",
  calendarIcon: "Calendar icon",
  timePicker: "Time picker",
  monthPicker: (t) => `Month picker${t ? " overlay" : ""}`,
  yearPicker: (t) => `Year picker${t ? " overlay" : ""}`,
  timeOverlay: (t) => `${t} overlay`,
  ...e ?? {}
}), mn = (e) => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0, Il = (e) => {
  const t = typeof e == "object" && e, r = {
    static: !0,
    solo: !1
  };
  if (!e) return { ...r, count: mn(!1) };
  const a = t ? e : {}, n = t ? a.count ?? !0 : e, d = mn(n);
  return Object.assign(r, a, { count: d });
}, Nl = (e, t, r) => e || (typeof r == "string" ? r : t), El = (e) => typeof e == "boolean" ? e ? vn({}) : !1 : vn(e), Fl = (e) => {
  const t = {
    enterSubmit: !0,
    tabSubmit: !0,
    openMenu: "open",
    selectOnFocus: !1,
    rangeSeparator: " - "
  };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : { ...t, enabled: e };
}, Ll = (e) => ({
  months: [],
  years: [],
  times: { hours: [], minutes: [], seconds: [] },
  ...e ?? {}
}), zl = (e) => ({
  showSelect: !0,
  showCancel: !0,
  showNow: !1,
  showPreview: !0,
  ...e ?? {}
}), Hl = (e) => {
  const t = { input: !1 };
  return typeof e == "object" ? { ...t, ...e ?? {}, enabled: !0 } : {
    enabled: e,
    ...t
  };
}, Ul = (e) => ({ ...{
  allowStopPropagation: !0,
  closeOnScroll: !1,
  modeHeight: 255,
  allowPreventDefault: !1,
  closeOnClearValue: !0,
  closeOnAutoApply: !0,
  noSwipe: !1,
  keepActionRow: !1,
  onClickOutside: void 0,
  tabOutClosesMenu: !0,
  arrowLeft: void 0,
  keepViewOnOffsetClick: !1,
  timeArrowHoldThreshold: 0,
  shadowDom: !1,
  mobileBreakpoint: 600,
  setDateOnMenuClose: !1
}, ...e ?? {} }), Wl = (e) => {
  const t = {
    dates: Array.isArray(e) ? e.map((r) => U(r)) : [],
    years: [],
    months: [],
    quarters: [],
    weeks: [],
    weekdays: [],
    options: { highlightDisabled: !1 }
  };
  return typeof e == "function" ? e : { ...t, ...e ?? {} };
}, Vl = (e) => typeof e == "object" ? {
  type: (e == null ? void 0 : e.type) ?? "local",
  hideOnOffsetDates: (e == null ? void 0 : e.hideOnOffsetDates) ?? !1
} : {
  type: e,
  hideOnOffsetDates: !1
}, jl = (e) => {
  const t = {
    noDisabledRange: !1,
    showLastInRange: !0,
    minMaxRawRange: !1,
    partialRange: !0,
    disableTimeRangeValidation: !1,
    maxRange: void 0,
    minRange: void 0,
    autoRange: void 0,
    fixedStart: !1,
    fixedEnd: !1
  };
  return typeof e == "object" ? { enabled: !0, ...t, ...e } : {
    enabled: e,
    ...t
  };
}, Kl = (e) => e ? typeof e == "string" ? {
  timezone: e,
  exactMatch: !1,
  dateInTz: void 0,
  emitTimezone: void 0,
  convertModel: !0
} : {
  timezone: e.timezone,
  exactMatch: e.exactMatch ?? !1,
  dateInTz: e.dateInTz ?? void 0,
  emitTimezone: e.emitTimezone ?? void 0,
  convertModel: e.convertModel ?? !0
} : { timezone: void 0, exactMatch: !1, emitTimezone: void 0 }, Ia = (e, t, r) => new Map(
  e.map((a) => {
    const n = Ga(a, t, r);
    return [Xa(n), n];
  })
), Gl = (e, t) => e.length ? new Map(
  e.map((r) => {
    const a = Ga(r.date, t);
    return [Xa(a), r];
  })
) : null, Ql = (e) => {
  var t;
  return {
    minDate: Fa(e.minDate, e.timezone, e.isSpecific),
    maxDate: Fa(e.maxDate, e.timezone, e.isSpecific),
    disabledDates: Ta(e.disabledDates) ? Ia(e.disabledDates, e.timezone, e.isSpecific) : e.disabledDates,
    allowedDates: Ta(e.allowedDates) ? Ia(e.allowedDates, e.timezone, e.isSpecific) : null,
    highlight: typeof e.highlight == "object" && Ta((t = e.highlight) == null ? void 0 : t.dates) ? Ia(e.highlight.dates, e.timezone) : e.highlight,
    markers: Gl(e.markers, e.timezone)
  };
}, ql = (e) => typeof e == "boolean" ? { enabled: e, dragSelect: !0, limit: null } : {
  enabled: !!e,
  limit: e.limit ? +e.limit : null,
  dragSelect: e.dragSelect ?? !0
}, Xl = (e) => ({
  ...Object.fromEntries(
    Object.keys(e).map((r) => {
      const a = r, n = e[a], d = typeof e[a] == "string" ? { [n]: !0 } : Object.fromEntries(n.map((f) => [f, !0]));
      return [r, d];
    })
  )
}), Be = (e) => {
  const t = () => {
    const oe = e.enableSeconds ? ":ss" : "", q = e.enableMinutes ? ":mm" : "";
    return e.is24 ? `HH${q}${oe}` : `hh${q}${oe} aa`;
  }, r = () => {
    var oe;
    return e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? t() : e.weekPicker ? `${((oe = W.value) == null ? void 0 : oe.type) === "iso" ? "RR" : "ww"}-yyyy` : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${t()}` : "MM/dd/yyyy";
  }, a = (oe) => _n(oe, e.enableSeconds), n = () => z.value.enabled ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null, d = Q(() => Il(e.multiCalendars)), f = Q(() => n()), g = Q(() => Yl(e.ariaLabels)), Y = Q(() => Ll(e.filters)), y = Q(() => El(e.transitions)), m = Q(() => zl(e.actionRow)), T = Q(
    () => Nl(e.previewFormat, e.format, r())
  ), $ = Q(() => Fl(e.textInput)), w = Q(() => Hl(e.inline)), te = Q(() => Ul(e.config)), C = Q(() => Wl(e.highlight)), W = Q(() => Vl(e.weekNumbers)), c = Q(() => Kl(e.timezone)), N = Q(() => ql(e.multiDates)), O = Q(
    () => Ql({
      minDate: e.minDate,
      maxDate: e.maxDate,
      disabledDates: e.disabledDates,
      allowedDates: e.allowedDates,
      highlight: C.value,
      markers: e.markers,
      timezone: c.value,
      isSpecific: e.monthPicker || e.yearPicker || e.quarterPicker
    })
  ), z = Q(() => jl(e.range)), K = Q(() => Xl(e.ui));
  return {
    defaultedTransitions: y,
    defaultedMultiCalendars: d,
    defaultedStartTime: f,
    defaultedAriaLabels: g,
    defaultedFilters: Y,
    defaultedActionRow: m,
    defaultedPreviewFormat: T,
    defaultedTextInput: $,
    defaultedInline: w,
    defaultedConfig: te,
    defaultedHighlight: C,
    defaultedWeekNumbers: W,
    defaultedRange: z,
    propDates: O,
    defaultedTz: c,
    defaultedMultiDates: N,
    defaultedUI: K,
    getDefaultPattern: r,
    getDefaultStartTime: n
  };
}, Jl = (e, t, r) => {
  const a = ee(), { defaultedTextInput: n, defaultedRange: d, defaultedTz: f, defaultedMultiDates: g, getDefaultPattern: Y } = Be(t), y = ee(""), m = Vt(t, "format"), T = Vt(t, "formatLocale");
  lt(
    a,
    () => {
      typeof t.onInternalModelChange == "function" && e("internal-model-change", a.value, k(!0));
    },
    { deep: !0 }
  ), lt(d, (i, ae) => {
    i.enabled !== ae.enabled && (a.value = null);
  }), lt(m, () => {
    j();
  });
  const $ = (i) => f.value.timezone && f.value.convertModel ? Ze(i, f.value.timezone) : i, w = (i) => {
    if (f.value.timezone && f.value.convertModel) {
      const ae = gl(f.value.timezone, i);
      return ol(i, ae);
    }
    return i;
  }, te = (i, ae, me = !1) => In(
    i,
    t.format,
    t.formatLocale,
    n.value.rangeSeparator,
    t.modelAuto,
    ae ?? Y(),
    me
  ), C = (i) => i ? t.modelType ? h(i) : {
    hours: gt(i),
    minutes: wt(i),
    seconds: t.enableSeconds ? Yt(i) : 0
  } : null, W = (i) => t.modelType ? h(i) : { month: Me(i), year: fe(i) }, c = (i) => Array.isArray(i) ? g.value.enabled ? i.map((ae) => N(ae, dt(U(), ae))) : la(
    () => [
      dt(U(), i[0]),
      i[1] ? dt(U(), i[1]) : Ct(d.value.partialRange)
    ],
    d.value.enabled
  ) : dt(U(), +i), N = (i, ae) => (typeof i == "string" || typeof i == "number") && t.modelType ? S(i) : ae, O = (i) => Array.isArray(i) ? [
    N(
      i[0],
      kt(null, +i[0].hours, +i[0].minutes, i[0].seconds)
    ),
    N(
      i[1],
      kt(null, +i[1].hours, +i[1].minutes, i[1].seconds)
    )
  ] : N(i, kt(null, i.hours, i.minutes, i.seconds)), z = (i) => {
    const ae = Pe(U(), { date: 1 });
    return Array.isArray(i) ? g.value.enabled ? i.map((me) => N(me, mt(ae, +me.month, +me.year))) : la(
      () => [
        N(i[0], mt(ae, +i[0].month, +i[0].year)),
        N(
          i[1],
          i[1] ? mt(ae, +i[1].month, +i[1].year) : Ct(d.value.partialRange)
        )
      ],
      d.value.enabled
    ) : N(i, mt(ae, +i.month, +i.year));
  }, K = (i) => {
    if (Array.isArray(i))
      return i.map((ae) => S(ae));
    throw new Error(qa.dateArr("multi-dates"));
  }, oe = (i) => {
    if (Array.isArray(i) && d.value.enabled) {
      const ae = i[0], me = i[1];
      return [
        U(Array.isArray(ae) ? ae[0] : null),
        Array.isArray(me) && me.length ? U(me[0]) : null
      ];
    }
    return U(i[0]);
  }, q = (i) => t.modelAuto ? Array.isArray(i) ? [S(i[0]), S(i[1])] : t.autoApply ? [S(i)] : [S(i), null] : Array.isArray(i) ? la(
    () => i[1] ? [
      S(i[0]),
      i[1] ? S(i[1]) : Ct(d.value.partialRange)
    ] : [S(i[0])],
    d.value.enabled
  ) : S(i), R = () => {
    Array.isArray(a.value) && d.value.enabled && a.value.length === 1 && a.value.push(Ct(d.value.partialRange));
  }, x = () => {
    const i = a.value;
    return [
      h(i[0]),
      i[1] ? h(i[1]) : Ct(d.value.partialRange)
    ];
  }, B = () => a.value[1] ? x() : h(Ne(a.value[0])), G = () => (a.value || []).map((i) => h(i)), de = (i = !1) => (i || R(), t.modelAuto ? B() : g.value.enabled ? G() : Array.isArray(a.value) ? la(() => x(), d.value.enabled) : h(Ne(a.value))), ve = (i) => !i || Array.isArray(i) && !i.length ? null : t.timePicker ? O(Ne(i)) : t.monthPicker ? z(Ne(i)) : t.yearPicker ? c(Ne(i)) : g.value.enabled ? K(Ne(i)) : t.weekPicker ? oe(Ne(i)) : q(Ne(i)), p = (i) => {
    const ae = ve(i);
    za(Ne(ae)) ? (a.value = Ne(ae), j()) : (a.value = null, y.value = "");
  }, I = () => {
    const i = (ae) => ct(ae, n.value.format);
    return `${i(a.value[0])} ${n.value.rangeSeparator} ${a.value[1] ? i(a.value[1]) : ""}`;
  }, re = () => r.value && a.value ? Array.isArray(a.value) ? I() : ct(a.value, n.value.format) : te(a.value), v = () => a.value ? g.value.enabled ? a.value.map((i) => te(i)).join("; ") : n.value.enabled && typeof n.value.format == "string" ? re() : te(a.value) : "", j = () => {
    !t.format || typeof t.format == "string" || n.value.enabled && typeof n.value.format == "string" ? y.value = v() : y.value = t.format(a.value);
  }, S = (i) => {
    if (t.utc) {
      const ae = new Date(i);
      return t.utc === "preserve" ? new Date(ae.getTime() + ae.getTimezoneOffset() * 6e4) : ae;
    }
    return t.modelType ? yl.includes(t.modelType) ? $(new Date(i)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? $(
      Ea(i, Y(), /* @__PURE__ */ new Date(), { locale: T.value })
    ) : $(
      Ea(i, t.modelType, /* @__PURE__ */ new Date(), { locale: T.value })
    ) : $(new Date(i));
  }, h = (i) => i ? t.utc ? Sl(i, t.utc === "preserve", t.enableSeconds) : t.modelType ? t.modelType === "timestamp" ? +w(i) : t.modelType === "iso" ? w(i).toISOString() : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? te(w(i)) : te(w(i), t.modelType, !0) : w(i) : "", le = (i, ae = !1, me = !1) => {
    if (me) return i;
    if (e("update:model-value", i), f.value.emitTimezone && ae) {
      const P = Array.isArray(i) ? i.map((ge) => Ze(Ne(ge), f.value.emitTimezone)) : Ze(Ne(i), f.value.emitTimezone);
      e("update:model-timezone-value", P);
    }
  }, E = (i) => Array.isArray(a.value) ? g.value.enabled ? a.value.map((ae) => i(ae)) : [
    i(a.value[0]),
    a.value[1] ? i(a.value[1]) : Ct(d.value.partialRange)
  ] : i(Ne(a.value)), D = () => {
    if (Array.isArray(a.value)) {
      const i = vt(a.value[0], t.weekStart), ae = a.value[1] ? vt(a.value[1], t.weekStart) : [];
      return [i.map((me) => U(me)), ae.map((me) => U(me))];
    }
    return vt(a.value, t.weekStart).map((i) => U(i));
  }, Z = (i, ae) => le(Ne(E(i)), !1, ae), u = (i) => {
    const ae = D();
    return i ? ae : e("update:model-value", D());
  }, k = (i = !1) => (i || j(), t.monthPicker ? Z(W, i) : t.timePicker ? Z(C, i) : t.yearPicker ? Z(fe, i) : t.weekPicker ? u(i) : le(de(i), !0, i));
  return {
    inputValue: y,
    internalModelValue: a,
    checkBeforeEmit: () => a.value ? d.value.enabled ? d.value.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1,
    parseExternalModelValue: p,
    formatInputValue: j,
    emitModelValue: k
  };
}, Zl = (e, t) => {
  const { defaultedFilters: r, propDates: a } = Be(e), { validateMonthYearInRange: n } = Mt(e), d = (m, T) => {
    let $ = m;
    return r.value.months.includes(Me($)) ? ($ = T ? Tt(m, 1) : Kt(m, 1), d($, T)) : $;
  }, f = (m, T) => {
    let $ = m;
    return r.value.years.includes(fe($)) ? ($ = T ? wn(m, 1) : Dn(m, 1), f($, T)) : $;
  }, g = (m, T = !1) => {
    const $ = Pe(U(), { month: e.month, year: e.year });
    let w = m ? Tt($, 1) : Kt($, 1);
    e.disableYearSelect && (w = dt(w, e.year));
    let te = Me(w), C = fe(w);
    r.value.months.includes(te) && (w = d(w, m), te = Me(w), C = fe(w)), r.value.years.includes(C) && (w = f(w, m), C = fe(w)), n(te, C, m, e.preventMinMaxNavigation) && Y(te, C, T);
  }, Y = (m, T, $) => {
    t("update-month-year", { month: m, year: T, fromNav: $ });
  }, y = Q(() => (m) => Yn(
    Pe(U(), { month: e.month, year: e.year }),
    a.value.maxDate,
    a.value.minDate,
    e.preventMinMaxNavigation,
    m
  ));
  return { handleMonthYearChange: g, isDisabled: y, updateMonthYear: Y };
}, va = {
  multiCalendars: { type: [Boolean, Number, String, Object], default: void 0 },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  autoPosition: { type: [Boolean, String], default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: [String, Object], default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  disableYearSelect: { type: Boolean, default: !1 },
  dayClass: {
    type: Function,
    default: null
  },
  yearRange: { type: Array, default: () => [1900, 2100] },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: null },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetDates: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  reverseYears: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  highlight: {
    type: [Function, Object],
    default: null
  },
  teleport: { type: [Boolean, String, Object], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function, Object],
    default: null
  },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: [Object, Boolean], default: !1 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  showMinPrices: { type: Boolean, default: !1 },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: [Boolean, Object], default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: [Boolean, Object], default: !1 },
  textInput: { type: [Boolean, Object], default: !1 },
  sixWeeks: { type: [Boolean, String], default: !1 },
  actionRow: { type: Object, default: () => ({}) },
  focusStartDate: { type: Boolean, default: !1 },
  disabledTimes: { type: [Function, Array], default: void 0 },
  timePickerInline: { type: Boolean, default: !1 },
  calendar: { type: Function, default: null },
  config: { type: Object, default: void 0 },
  quarterPicker: { type: Boolean, default: !1 },
  yearFirst: { type: Boolean, default: !1 },
  loading: { type: Boolean, default: !1 },
  onInternalModelChange: { type: [Function, Object], default: null },
  enableMinutes: { type: Boolean, default: !0 },
  ui: { type: Object, default: () => ({}) }
}, ut = {
  ...va,
  shadow: { type: Boolean, default: !1 },
  flowStep: { type: Number, default: 0 },
  internalModelValue: { type: [Date, Array], default: null },
  noOverlayFocus: { type: Boolean, default: !1 },
  collapse: { type: Boolean, default: !1 },
  menuWrapRef: { type: Object, default: null },
  getInputRect: { type: Function, default: () => ({}) },
  isTextInputDate: { type: Boolean, default: !1 },
  isMobile: { type: Boolean, default: void 0 }
}, xl = ["title"], er = ["disabled"], tr = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "ActionRow",
  props: {
    menuMount: { type: Boolean, default: !1 },
    calendarWidth: { type: Number, default: 0 },
    ...ut
  },
  emits: ["close-picker", "select-date", "select-now", "invalid-select"],
  setup(e, { emit: t }) {
    const r = t, a = e, {
      defaultedActionRow: n,
      defaultedPreviewFormat: d,
      defaultedMultiCalendars: f,
      defaultedTextInput: g,
      defaultedInline: Y,
      defaultedRange: y,
      defaultedMultiDates: m
    } = Be(a), { isTimeValid: T, isMonthValid: $ } = Mt(a), { buildMatrix: w } = Dt(), te = ee(null), C = ee(null), W = ee(!1), c = ee({}), N = ee(null), O = ee(null);
    We(() => {
      a.arrowNavigation && w([Le(te), Le(C)], "actionRow"), z(), window.addEventListener("resize", z);
    }), Xt(() => {
      window.removeEventListener("resize", z);
    });
    const z = () => {
      W.value = !1, setTimeout(() => {
        var re, v;
        const p = (re = N.value) == null ? void 0 : re.getBoundingClientRect(), I = (v = O.value) == null ? void 0 : v.getBoundingClientRect();
        p && I && (c.value.maxWidth = `${I.width - p.width - 20}px`), W.value = !0;
      }, 0);
    }, K = Q(() => y.value.enabled && !y.value.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0), oe = Q(
      () => !T.value(a.internalModelValue) || !$.value(a.internalModelValue) || !K.value
    ), q = () => {
      const p = d.value;
      return a.timePicker || a.monthPicker, p(Ne(a.internalModelValue));
    }, R = () => {
      const p = a.internalModelValue;
      return f.value.count > 0 ? `${x(p[0])} - ${x(p[1])}` : [x(p[0]), x(p[1])];
    }, x = (p) => In(
      p,
      d.value,
      a.formatLocale,
      g.value.rangeSeparator,
      a.modelAuto,
      d.value
    ), B = Q(() => !a.internalModelValue || !a.menuMount ? "" : typeof d.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? R() : m.value.enabled ? a.internalModelValue.map((p) => `${x(p)}`) : a.modelAuto ? `${x(a.internalModelValue[0])}` : `${x(a.internalModelValue[0])} -` : x(a.internalModelValue) : q()), G = () => m.value.enabled ? "; " : " - ", de = Q(
      () => Array.isArray(B.value) ? B.value.join(G()) : B.value
    ), ve = () => {
      T.value(a.internalModelValue) && $.value(a.internalModelValue) && K.value ? r("select-date") : r("invalid-select");
    };
    return (p, I) => (A(), V("div", {
      ref_key: "actionRowRef",
      ref: O,
      class: "dp__action_row"
    }, [
      p.$slots["action-row"] ? ue(p.$slots, "action-row", ze(He({ key: 0 }, {
        internalModelValue: p.internalModelValue,
        disabled: oe.value,
        selectDate: () => p.$emit("select-date"),
        closePicker: () => p.$emit("close-picker")
      }))) : (A(), V(ke, { key: 1 }, [
        s(n).showPreview ? (A(), V("div", {
          key: 0,
          class: "dp__selection_preview",
          title: de.value,
          style: nt(c.value)
        }, [
          p.$slots["action-preview"] && W.value ? ue(p.$slots, "action-preview", {
            key: 0,
            value: p.internalModelValue
          }) : J("", !0),
          !p.$slots["action-preview"] && W.value ? (A(), V(ke, { key: 1 }, [
            pt(Ke(de.value), 1)
          ], 64)) : J("", !0)
        ], 12, xl)) : J("", !0),
        ye("div", {
          ref_key: "actionBtnContainer",
          ref: N,
          class: "dp__action_buttons",
          "data-dp-element": "action-row"
        }, [
          p.$slots["action-buttons"] ? ue(p.$slots, "action-buttons", {
            key: 0,
            value: p.internalModelValue
          }) : J("", !0),
          p.$slots["action-buttons"] ? J("", !0) : (A(), V(ke, { key: 1 }, [
            !s(Y).enabled && s(n).showCancel ? (A(), V("button", {
              key: 0,
              ref_key: "cancelButtonRef",
              ref: te,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: I[0] || (I[0] = (re) => p.$emit("close-picker")),
              onKeydown: I[1] || (I[1] = (re) => s(qe)(re, () => p.$emit("close-picker")))
            }, Ke(p.cancelText), 545)) : J("", !0),
            s(n).showNow ? (A(), V("button", {
              key: 1,
              type: "button",
              class: "dp__action_button dp__action_cancel",
              onClick: I[2] || (I[2] = (re) => p.$emit("select-now")),
              onKeydown: I[3] || (I[3] = (re) => s(qe)(re, () => p.$emit("select-now")))
            }, Ke(p.nowButtonLabel), 33)) : J("", !0),
            s(n).showSelect ? (A(), V("button", {
              key: 2,
              ref_key: "selectButtonRef",
              ref: C,
              type: "button",
              class: "dp__action_button dp__action_select",
              disabled: oe.value,
              "data-test-id": "select-button",
              onKeydown: I[4] || (I[4] = (re) => s(qe)(re, () => ve())),
              onClick: ve
            }, Ke(p.selectText), 41, er)) : J("", !0)
          ], 64))
        ], 512)
      ], 64))
    ], 512));
  }
}), ar = ["role", "aria-label", "tabindex"], nr = { class: "dp__selection_grid_header" }, lr = ["aria-selected", "aria-disabled", "data-test-id", "onClick", "onKeydown", "onMouseover"], rr = ["aria-label"], Jt = /* @__PURE__ */ Ue({
  __name: "SelectionOverlay",
  props: {
    items: {},
    type: {},
    isLast: { type: Boolean },
    arrowNavigation: { type: Boolean },
    skipButtonRef: { type: Boolean },
    headerRefs: {},
    hideNavigation: {},
    escClose: { type: Boolean },
    useRelative: { type: Boolean },
    height: {},
    textInput: { type: [Boolean, Object] },
    config: {},
    noOverlayFocus: { type: Boolean },
    focusValue: {},
    menuWrapRef: {},
    ariaLabels: {},
    overlayLabel: {}
  },
  emits: ["selected", "toggle", "reset-flow", "hover-value"],
  setup(e, { expose: t, emit: r }) {
    const { setSelectionGrid: a, buildMultiLevelMatrix: n, setMonthPicker: d } = Dt(), f = r, g = e, { defaultedAriaLabels: Y, defaultedTextInput: y, defaultedConfig: m } = Be(
      g
    ), { hideNavigationButtons: T } = ga(), $ = ee(!1), w = ee(null), te = ee(null), C = ee([]), W = ee(), c = ee(null), N = ee(0), O = ee(null);
    qn(() => {
      w.value = null;
    }), We(() => {
      at().then(() => G()), g.noOverlayFocus || K(), z(!0);
    }), Xt(() => z(!1));
    const z = (E) => {
      var D;
      g.arrowNavigation && ((D = g.headerRefs) != null && D.length ? d(E) : a(E));
    }, K = () => {
      var D;
      const E = Le(te);
      E && (y.value.enabled || (w.value ? (D = w.value) == null || D.focus({ preventScroll: !0 }) : E.focus({ preventScroll: !0 })), $.value = E.clientHeight < E.scrollHeight);
    }, oe = Q(
      () => ({
        dp__overlay: !0,
        "dp--overlay-absolute": !g.useRelative,
        "dp--overlay-relative": g.useRelative
      })
    ), q = Q(
      () => g.useRelative ? { height: `${g.height}px`, width: "var(--dp-menu-min-width)" } : void 0
    ), R = Q(() => ({
      dp__overlay_col: !0
    })), x = Q(
      () => ({
        dp__btn: !0,
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: $.value,
        dp__button_bottom: g.isLast
      })
    ), B = Q(() => {
      var E, D;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((E = g.items) == null ? void 0 : E.length) <= 6,
        dp__container_block: ((D = g.items) == null ? void 0 : D.length) > 6
      };
    });
    lt(
      () => g.items,
      () => G(!1),
      { deep: !0 }
    );
    const G = (E = !0) => {
      at().then(() => {
        const D = Le(w), Z = Le(te), u = Le(c), k = Le(O), F = u ? u.getBoundingClientRect().height : 0;
        Z && (Z.getBoundingClientRect().height ? N.value = Z.getBoundingClientRect().height - F : N.value = m.value.modeHeight - F), D && k && E && (k.scrollTop = D.offsetTop - k.offsetTop - (N.value / 2 - D.getBoundingClientRect().height) - F);
      });
    }, de = (E) => {
      E.disabled || f("selected", E.value);
    }, ve = () => {
      f("toggle"), f("reset-flow");
    }, p = () => {
      g.escClose && ve();
    }, I = (E, D, Z, u) => {
      E && ((D.active || D.value === g.focusValue) && (w.value = E), g.arrowNavigation && (Array.isArray(C.value[Z]) ? C.value[Z][u] = E : C.value[Z] = [E], re()));
    }, re = () => {
      var D, Z;
      const E = (D = g.headerRefs) != null && D.length ? [g.headerRefs].concat(C.value) : C.value.concat([g.skipButtonRef ? [] : [c.value]]);
      n(Ne(E), (Z = g.headerRefs) != null && Z.length ? "monthPicker" : "selectionGrid");
    }, v = (E) => {
      g.arrowNavigation || bt(E, m.value, !0);
    }, j = (E) => {
      W.value = E, f("hover-value", E);
    }, S = () => {
      if (ve(), !g.isLast) {
        const E = La(g.menuWrapRef ?? null, "action-row");
        if (E) {
          const D = Pn(E);
          D == null || D.focus();
        }
      }
    }, h = (E) => {
      switch (E.key) {
        case Ce.esc:
          return p();
        case Ce.arrowLeft:
          return v(E);
        case Ce.arrowRight:
          return v(E);
        case Ce.arrowUp:
          return v(E);
        case Ce.arrowDown:
          return v(E);
        default:
          return;
      }
    }, le = (E) => {
      if (E.key === Ce.enter) return ve();
      if (E.key === Ce.tab) return S();
    };
    return t({ focusGrid: K }), (E, D) => {
      var Z;
      return A(), V("div", {
        ref_key: "gridWrapRef",
        ref: te,
        class: De(oe.value),
        style: nt(q.value),
        role: E.useRelative ? void 0 : "dialog",
        "aria-label": E.overlayLabel,
        tabindex: E.useRelative ? void 0 : "0",
        onKeydown: h,
        onClick: D[0] || (D[0] = jt(() => {
        }, ["prevent"]))
      }, [
        ye("div", {
          ref_key: "containerRef",
          ref: O,
          class: De(B.value),
          style: nt({ "--dp-overlay-height": `${N.value}px` }),
          role: "grid"
        }, [
          ye("div", nr, [
            ue(E.$slots, "header")
          ]),
          E.$slots.overlay ? ue(E.$slots, "overlay", { key: 0 }) : (A(!0), V(ke, { key: 1 }, Oe(E.items, (u, k) => (A(), V("div", {
            key: k,
            class: De(["dp__overlay_row", { dp__flex_row: E.items.length >= 3 }]),
            role: "row"
          }, [
            (A(!0), V(ke, null, Oe(u, (F, i) => (A(), V("div", {
              key: F.value,
              ref_for: !0,
              ref: (ae) => I(ae, F, k, i),
              role: "gridcell",
              class: De(R.value),
              "aria-selected": F.active || void 0,
              "aria-disabled": F.disabled || void 0,
              tabindex: "0",
              "data-test-id": F.text,
              onClick: jt((ae) => de(F), ["prevent"]),
              onKeydown: (ae) => s(qe)(ae, () => de(F), !0),
              onMouseover: (ae) => j(F.value)
            }, [
              ye("div", {
                class: De(F.className)
              }, [
                E.$slots.item ? ue(E.$slots, "item", {
                  key: 0,
                  item: F
                }) : J("", !0),
                E.$slots.item ? J("", !0) : (A(), V(ke, { key: 1 }, [
                  pt(Ke(F.text), 1)
                ], 64))
              ], 2)
            ], 42, lr))), 128))
          ], 2))), 128))
        ], 6),
        E.$slots["button-icon"] ? oa((A(), V("button", {
          key: 0,
          ref_key: "toggleButton",
          ref: c,
          type: "button",
          "aria-label": (Z = s(Y)) == null ? void 0 : Z.toggleOverlay,
          class: De(x.value),
          tabindex: "0",
          onClick: ve,
          onKeydown: le
        }, [
          ue(E.$slots, "button-icon")
        ], 42, rr)), [
          [sa, !s(T)(E.hideNavigation, E.type)]
        ]) : J("", !0)
      ], 46, ar);
    };
  }
}), or = ["data-dp-mobile"], ma = /* @__PURE__ */ Ue({
  __name: "InstanceWrap",
  props: {
    multiCalendars: {},
    stretch: { type: Boolean },
    collapse: { type: Boolean },
    isMobile: { type: Boolean }
  },
  setup(e) {
    const t = e, r = Q(
      () => t.multiCalendars > 0 ? [...Array(t.multiCalendars).keys()] : [0]
    ), a = Q(() => ({
      dp__instance_calendar: t.multiCalendars > 0
    }));
    return (n, d) => (A(), V("div", {
      class: De({
        dp__menu_inner: !n.stretch,
        "dp--menu--inner-stretched": n.stretch,
        dp__flex_display: n.multiCalendars > 0,
        "dp--flex-display-collapsed": n.collapse
      }),
      "data-dp-mobile": n.isMobile
    }, [
      (A(!0), V(ke, null, Oe(r.value, (f, g) => (A(), V("div", {
        key: f,
        class: De(a.value)
      }, [
        ue(n.$slots, "default", {
          instance: f,
          index: g
        })
      ], 2))), 128))
    ], 10, or));
  }
}), sr = ["data-dp-element", "aria-label", "aria-disabled"], Wt = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "ArrowBtn",
  props: {
    ariaLabel: {},
    elName: {},
    disabled: { type: Boolean }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const r = t, a = ee(null);
    return We(() => r("set-ref", a)), (n, d) => (A(), V("button", {
      ref_key: "elRef",
      ref: a,
      type: "button",
      "data-dp-element": n.elName,
      class: "dp__btn dp--arrow-btn-nav",
      tabindex: "0",
      "aria-label": n.ariaLabel,
      "aria-disabled": n.disabled || void 0,
      onClick: d[0] || (d[0] = (f) => n.$emit("activate")),
      onKeydown: d[1] || (d[1] = (f) => s(qe)(f, () => n.$emit("activate"), !0))
    }, [
      ye("span", {
        class: De(["dp__inner_nav", { dp__inner_nav_disabled: n.disabled }])
      }, [
        ue(n.$slots, "default")
      ], 2)
    ], 40, sr));
  }
}), ur = ["aria-label", "data-test-id"], Ln = /* @__PURE__ */ Ue({
  __name: "YearModePicker",
  props: {
    ...ut,
    showYearPicker: { type: Boolean, default: !1 },
    items: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    isDisabled: { type: Function, default: () => !1 }
  },
  emits: ["toggle-year-picker", "year-select", "handle-year"],
  setup(e, { emit: t }) {
    const r = t, a = e, { showRightIcon: n, showLeftIcon: d } = ga(), { defaultedConfig: f, defaultedMultiCalendars: g, defaultedAriaLabels: Y, defaultedTransitions: y, defaultedUI: m } = Be(a), { showTransition: T, transitionName: $ } = Zt(y), w = ee(!1), te = (c = !1, N) => {
      w.value = !w.value, r("toggle-year-picker", { flow: c, show: N });
    }, C = (c) => {
      w.value = !1, r("year-select", c);
    }, W = (c = !1) => {
      r("handle-year", c);
    };
    return (c, N) => {
      var O, z, K, oe, q;
      return A(), V(ke, null, [
        ye("div", {
          class: De(["dp--year-mode-picker", { "dp--hidden-el": w.value }])
        }, [
          s(d)(s(g), e.instance) ? (A(), Ae(Wt, {
            key: 0,
            ref: "mpPrevIconRef",
            "aria-label": (O = s(Y)) == null ? void 0 : O.prevYear,
            disabled: e.isDisabled(!1),
            class: De((z = s(m)) == null ? void 0 : z.navBtnPrev),
            onActivate: N[0] || (N[0] = (R) => W(!1))
          }, {
            default: we(() => [
              c.$slots["arrow-left"] ? ue(c.$slots, "arrow-left", { key: 0 }) : J("", !0),
              c.$slots["arrow-left"] ? J("", !0) : (A(), Ae(s(Ua), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : J("", !0),
          ye("button", {
            ref: "mpYearButtonRef",
            class: "dp__btn dp--year-select",
            type: "button",
            "aria-label": `${e.year}-${(K = s(Y)) == null ? void 0 : K.openYearsOverlay}`,
            "data-test-id": `year-mode-btn-${e.instance}`,
            onClick: N[1] || (N[1] = () => te(!1)),
            onKeydown: N[2] || (N[2] = Xn(() => te(!1), ["enter"]))
          }, [
            c.$slots.year ? ue(c.$slots, "year", {
              key: 0,
              year: e.year
            }) : J("", !0),
            c.$slots.year ? J("", !0) : (A(), V(ke, { key: 1 }, [
              pt(Ke(e.year), 1)
            ], 64))
          ], 40, ur),
          s(n)(s(g), e.instance) ? (A(), Ae(Wt, {
            key: 1,
            ref: "mpNextIconRef",
            "aria-label": (oe = s(Y)) == null ? void 0 : oe.nextYear,
            disabled: e.isDisabled(!0),
            class: De((q = s(m)) == null ? void 0 : q.navBtnNext),
            onActivate: N[3] || (N[3] = (R) => W(!0))
          }, {
            default: we(() => [
              c.$slots["arrow-right"] ? ue(c.$slots, "arrow-right", { key: 0 }) : J("", !0),
              c.$slots["arrow-right"] ? J("", !0) : (A(), Ae(s(Wa), { key: 1 }))
            ]),
            _: 3
          }, 8, ["aria-label", "disabled", "class"])) : J("", !0)
        ], 2),
        tt(Et, {
          name: s($)(e.showYearPicker),
          css: s(T)
        }, {
          default: we(() => {
            var R, x;
            return [
              e.showYearPicker ? (A(), Ae(Jt, {
                key: 0,
                items: e.items,
                "text-input": c.textInput,
                "esc-close": c.escClose,
                config: c.config,
                "is-last": c.autoApply && !s(f).keepActionRow,
                "hide-navigation": c.hideNavigation,
                "aria-labels": c.ariaLabels,
                "overlay-label": (x = (R = s(Y)) == null ? void 0 : R.yearPicker) == null ? void 0 : x.call(R, !0),
                type: "year",
                onToggle: te,
                onSelected: N[4] || (N[4] = (B) => C(B))
              }, Ge({
                "button-icon": we(() => [
                  c.$slots["calendar-icon"] ? ue(c.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                  c.$slots["calendar-icon"] ? J("", !0) : (A(), Ae(s(Ft), { key: 1 }))
                ]),
                _: 2
              }, [
                c.$slots["year-overlay-value"] ? {
                  name: "item",
                  fn: we(({ item: B }) => [
                    ue(c.$slots, "year-overlay-value", {
                      text: B.text,
                      value: B.value
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation", "aria-labels", "overlay-label"])) : J("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 64);
    };
  }
}), Za = (e, t, r) => {
  if (t.value && Array.isArray(t.value))
    if (t.value.some((a) => $e(e, a))) {
      const a = t.value.filter((n) => !$e(n, e));
      t.value = a.length ? a : null;
    } else (r && +r > t.value.length || !r) && t.value.push(e);
  else
    t.value = [e];
}, xa = (e, t, r) => {
  let a = e.value ? e.value.slice() : [];
  return a.length === 2 && a[1] !== null && (a = []), a.length ? (_e(t, a[0]) ? a.unshift(t) : a[1] = t, r("range-end", t)) : (a = [t], r("range-start", t)), a;
}, pa = (e, t, r, a) => {
  e && (e[0] && e[1] && r && t("auto-apply"), e[0] && !e[1] && a && r && t("auto-apply"));
}, zn = (e) => {
  Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map((t) => Ze(U(t), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Ze(U(e.value), e.timezone));
}, Hn = (e, t, r, a) => Array.isArray(t.value) && (t.value.length === 2 || t.value.length === 1 && a.value.partialRange) ? a.value.fixedStart && (Ie(e, t.value[0]) || $e(e, t.value[0])) ? [t.value[0], e] : a.value.fixedEnd && (_e(e, t.value[1]) || $e(e, t.value[1])) ? [e, t.value[1]] : (r("invalid-fixed-range", e), t.value) : [], Un = ({
  multiCalendars: e,
  range: t,
  highlight: r,
  propDates: a,
  calendars: n,
  modelValue: d,
  props: f,
  filters: g,
  year: Y,
  month: y,
  emit: m
}) => {
  const T = Q(() => Qa(f.yearRange, f.locale, f.reverseYears)), $ = ee([!1]), w = Q(() => (B, G) => {
    const de = Pe(st(/* @__PURE__ */ new Date()), {
      month: y.value(B),
      year: Y.value(B)
    }), ve = G ? Mn(de) : ia(de);
    return Yn(
      ve,
      a.value.maxDate,
      a.value.minDate,
      f.preventMinMaxNavigation,
      G
    );
  }), te = () => Array.isArray(d.value) && e.value.solo && d.value[1], C = () => {
    for (let B = 0; B < e.value.count; B++)
      if (B === 0)
        n.value[B] = n.value[0];
      else if (B === e.value.count - 1 && te())
        n.value[B] = {
          month: Me(d.value[1]),
          year: fe(d.value[1])
        };
      else {
        const G = Pe(U(), n.value[B - 1]);
        n.value[B] = { month: Me(G), year: fe(wn(G, 1)) };
      }
  }, W = (B) => {
    if (!B) return C();
    const G = Pe(U(), n.value[B]);
    return n.value[0].year = fe(Dn(G, e.value.count - 1)), C();
  }, c = (B, G) => {
    const de = sl(G, B);
    return t.value.showLastInRange && de > 1 ? G : B;
  }, N = (B) => f.focusStartDate || e.value.solo ? B[0] : B[1] ? c(B[0], B[1]) : B[0], O = () => {
    if (d.value) {
      const B = Array.isArray(d.value) ? N(d.value) : d.value;
      n.value[0] = { month: Me(B), year: fe(B) };
    }
  }, z = () => {
    O(), e.value.count && C();
  };
  lt(d, (B, G) => {
    f.isTextInputDate && JSON.stringify(B ?? {}) !== JSON.stringify(G ?? {}) && z();
  }), We(() => {
    z();
  });
  const K = (B, G) => {
    n.value[G].year = B, m("update-month-year", { instance: G, year: B, month: n.value[G].month }), e.value.count && !e.value.solo && W(G);
  }, oe = Q(() => (B) => It(T.value, (G) => {
    var I;
    const de = Y.value(B) === G.value, ve = Qt(
      G.value,
      Nt(a.value.minDate),
      Nt(a.value.maxDate)
    ) || ((I = g.value.years) == null ? void 0 : I.includes(Y.value(B))), p = Ja(r.value, G.value);
    return { active: de, disabled: ve, highlighted: p };
  })), q = (B, G) => {
    K(B, G), x(G);
  }, R = (B, G = !1) => {
    if (!w.value(B, G)) {
      const de = G ? Y.value(B) + 1 : Y.value(B) - 1;
      K(de, B);
    }
  }, x = (B, G = !1, de) => {
    G || m("reset-flow"), de !== void 0 ? $.value[B] = de : $.value[B] = !$.value[B], $.value[B] ? m("overlay-toggle", { open: !0, overlay: je.year }) : (m("overlay-closed"), m("overlay-toggle", { open: !1, overlay: je.year }));
  };
  return {
    isDisabled: w,
    groupedYears: oe,
    showYearPicker: $,
    selectYear: K,
    toggleYearPicker: x,
    handleYearSelect: q,
    handleYear: R
  };
}, ir = (e, t) => {
  const {
    defaultedMultiCalendars: r,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: d,
    defaultedRange: f,
    defaultedHighlight: g,
    propDates: Y,
    defaultedTz: y,
    defaultedFilters: m,
    defaultedMultiDates: T
  } = Be(e), $ = () => {
    e.isTextInputDate && z(fe(U(e.startDate)), 0);
  }, { modelValue: w, year: te, month: C, calendars: W } = xt(e, t, $), c = Q(() => Tn(e.formatLocale, e.locale, e.monthNameFormat)), N = ee(null), { checkMinMaxRange: O } = Mt(e), {
    selectYear: z,
    groupedYears: K,
    showYearPicker: oe,
    toggleYearPicker: q,
    handleYearSelect: R,
    handleYear: x,
    isDisabled: B
  } = Un({
    modelValue: w,
    multiCalendars: r,
    range: f,
    highlight: g,
    calendars: W,
    year: te,
    propDates: Y,
    month: C,
    filters: m,
    props: e,
    emit: t
  });
  We(() => {
    e.startDate && (w.value && e.focusStartDate || !w.value) && z(fe(U(e.startDate)), 0);
  });
  const G = (k) => k ? { month: Me(k), year: fe(k) } : { month: null, year: null }, de = () => w.value ? Array.isArray(w.value) ? w.value.map((k) => G(k)) : G(w.value) : G(), ve = (k, F) => {
    const i = W.value[k], ae = de();
    return Array.isArray(ae) ? ae.some((me) => me.year === (i == null ? void 0 : i.year) && me.month === F) : (i == null ? void 0 : i.year) === ae.year && F === ae.month;
  }, p = (k, F, i) => {
    var me, P;
    const ae = de();
    return Array.isArray(ae) ? te.value(F) === ((me = ae[i]) == null ? void 0 : me.year) && k === ((P = ae[i]) == null ? void 0 : P.month) : !1;
  }, I = (k, F) => {
    if (f.value.enabled) {
      const i = de();
      if (Array.isArray(w.value) && Array.isArray(i)) {
        const ae = p(k, F, 0) || p(k, F, 1), me = mt(st(U()), k, te.value(F));
        return fa(w.value, N.value, me) && !ae;
      }
      return !1;
    }
    return !1;
  }, re = Q(() => (k) => It(c.value, (F) => {
    var ge;
    const i = ve(k, F.value), ae = Qt(
      F.value,
      Cn(te.value(k), Y.value.minDate),
      On(te.value(k), Y.value.maxDate)
    ) || Bl(Y.value.disabledDates, te.value(k)).includes(F.value) || ((ge = m.value.months) == null ? void 0 : ge.includes(F.value)) || !_l(Y.value.allowedDates, te.value(k), F.value), me = I(F.value, k), P = Nn(g.value, F.value, te.value(k));
    return { active: i, disabled: ae, isBetween: me, highlighted: P };
  })), v = (k, F) => mt(st(U()), k, te.value(F)), j = (k, F) => {
    const i = w.value ? w.value : st(/* @__PURE__ */ new Date());
    w.value = mt(i, k, te.value(F)), t("auto-apply"), t("update-flow-step");
  }, S = (k, F) => {
    const i = v(k, F);
    f.value.fixedEnd || f.value.fixedStart ? w.value = Hn(i, w, t, f) : w.value ? O(i, w.value) && (w.value = xa(w, v(k, F), t)) : w.value = [v(k, F)], at().then(() => {
      pa(w.value, t, e.autoApply, e.modelAuto);
    });
  }, h = (k, F) => {
    Za(v(k, F), w, T.value.limit), t("auto-apply", !0);
  }, le = (k, F) => (W.value[F].month = k, D(F, W.value[F].year, k), T.value.enabled ? h(k, F) : f.value.enabled ? S(k, F) : j(k, F)), E = (k, F) => {
    z(k, F), D(F, k, null);
  }, D = (k, F, i) => {
    let ae = i;
    if (!ae && ae !== 0) {
      const me = de();
      ae = Array.isArray(me) ? me[k].month : me.month;
    }
    t("update-month-year", { instance: k, year: F, month: ae });
  };
  return {
    groupedMonths: re,
    groupedYears: K,
    year: te,
    isDisabled: B,
    defaultedMultiCalendars: r,
    defaultedAriaLabels: a,
    defaultedTransitions: n,
    defaultedConfig: d,
    showYearPicker: oe,
    modelValue: w,
    presetDate: (k, F) => {
      zn({
        value: k,
        modelValue: w,
        range: f.value.enabled,
        timezone: F ? void 0 : y.value.timezone
      }), t("auto-apply");
    },
    setHoverDate: (k, F) => {
      N.value = v(k, F);
    },
    selectMonth: le,
    selectYear: E,
    toggleYearPicker: q,
    handleYearSelect: R,
    handleYear: x,
    getModelMonthYear: de
  };
}, dr = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "MonthPicker",
  props: {
    ...ut
  },
  emits: [
    "update:internal-model-value",
    "overlay-closed",
    "reset-flow",
    "range-start",
    "range-hovering",
    "range-end",
    "auto-apply",
    "update-month-year",
    "update-flow-step",
    "mount",
    "invalid-fixed-range",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = Rt(), d = et(n, "yearMode"), f = e;
    We(() => {
      f.shadow || a("mount", null);
    });
    const {
      groupedMonths: g,
      groupedYears: Y,
      year: y,
      isDisabled: m,
      defaultedMultiCalendars: T,
      defaultedConfig: $,
      showYearPicker: w,
      modelValue: te,
      presetDate: C,
      setHoverDate: W,
      selectMonth: c,
      selectYear: N,
      toggleYearPicker: O,
      handleYearSelect: z,
      handleYear: K,
      getModelMonthYear: oe
    } = ir(f, a);
    return t({ getSidebarProps: () => ({
      modelValue: te,
      year: y,
      getModelMonthYear: oe,
      selectMonth: c,
      selectYear: N,
      handleYear: K
    }), presetDate: C, toggleYearPicker: (R) => O(0, R) }), (R, x) => (A(), Ae(ma, {
      "multi-calendars": s(T).count,
      collapse: R.collapse,
      stretch: "",
      "is-mobile": R.isMobile
    }, {
      default: we(({ instance: B }) => [
        R.$slots["top-extra"] ? ue(R.$slots, "top-extra", {
          key: 0,
          value: R.internalModelValue
        }) : J("", !0),
        R.$slots["month-year"] ? ue(R.$slots, "month-year", ze(He({ key: 1 }, {
          year: s(y),
          months: s(g)(B),
          years: s(Y)(B),
          selectMonth: s(c),
          selectYear: s(N),
          instance: B
        }))) : (A(), Ae(Jt, {
          key: 2,
          items: s(g)(B),
          "arrow-navigation": R.arrowNavigation,
          "is-last": R.autoApply && !s($).keepActionRow,
          "esc-close": R.escClose,
          height: s($).modeHeight,
          config: R.config,
          "no-overlay-focus": !!(R.noOverlayFocus || R.textInput),
          "use-relative": "",
          type: "month",
          onSelected: (G) => s(c)(G, B),
          onHoverValue: (G) => s(W)(G, B)
        }, Ge({
          header: we(() => [
            tt(Ln, He(R.$props, {
              items: s(Y)(B),
              instance: B,
              "show-year-picker": s(w)[B],
              year: s(y)(B),
              "is-disabled": (G) => s(m)(B, G),
              onHandleYear: (G) => s(K)(B, G),
              onYearSelect: (G) => s(z)(G, B),
              onToggleYearPicker: (G) => s(O)(B, G == null ? void 0 : G.flow, G == null ? void 0 : G.show)
            }), Ge({ _: 2 }, [
              Oe(s(d), (G, de) => ({
                name: G,
                fn: we((ve) => [
                  ue(R.$slots, G, ze(Je(ve)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          _: 2
        }, [
          R.$slots["month-overlay-value"] ? {
            name: "item",
            fn: we(({ item: G }) => [
              ue(R.$slots, "month-overlay-value", {
                text: G.text,
                value: G.value
              })
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse", "is-mobile"]));
  }
}), cr = (e, t) => {
  const r = () => {
    e.isTextInputDate && (m.value = fe(U(e.startDate)));
  }, { modelValue: a } = xt(e, t, r), n = ee(null), { defaultedHighlight: d, defaultedMultiDates: f, defaultedFilters: g, defaultedRange: Y, propDates: y } = Be(e), m = ee();
  We(() => {
    e.startDate && (a.value && e.focusStartDate || !a.value) && (m.value = fe(U(e.startDate)));
  });
  const T = (c) => Array.isArray(a.value) ? a.value.some((N) => fe(N) === c) : a.value ? fe(a.value) === c : !1, $ = (c) => Y.value.enabled && Array.isArray(a.value) ? fa(a.value, n.value, te(c)) : !1, w = Q(() => It(Qa(e.yearRange, e.locale, e.reverseYears), (c) => {
    const N = T(c.value), O = Qt(
      c.value,
      Nt(y.value.minDate),
      Nt(y.value.maxDate)
    ) || g.value.years.includes(c.value), z = $(c.value) && !N, K = Ja(d.value, c.value);
    return { active: N, disabled: O, isBetween: z, highlighted: K };
  })), te = (c) => dt(st(ia(/* @__PURE__ */ new Date())), c);
  return {
    groupedYears: w,
    modelValue: a,
    focusYear: m,
    setHoverValue: (c) => {
      n.value = dt(st(/* @__PURE__ */ new Date()), c);
    },
    selectYear: (c) => {
      var N;
      if (t("update-month-year", { instance: 0, year: c }), f.value.enabled)
        return a.value ? Array.isArray(a.value) && (((N = a.value) == null ? void 0 : N.map((z) => fe(z))).includes(c) ? a.value = a.value.filter((z) => fe(z) !== c) : a.value.push(dt(Xe(U()), c))) : a.value = [dt(Xe(ia(U())), c)], t("auto-apply", !0);
      Y.value.enabled ? (a.value = xa(a, te(c), t), at().then(() => {
        pa(a.value, t, e.autoApply, e.modelAuto);
      })) : (a.value = te(c), t("auto-apply"));
    }
  };
}, fr = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "YearPicker",
  props: {
    ...ut
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "range-start",
    "range-end",
    "auto-apply",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { groupedYears: d, modelValue: f, focusYear: g, selectYear: Y, setHoverValue: y } = cr(n, a), { defaultedConfig: m } = Be(n);
    return t({ getSidebarProps: () => ({
      modelValue: f,
      selectYear: Y
    }) }), ($, w) => (A(), V("div", null, [
      $.$slots["top-extra"] ? ue($.$slots, "top-extra", {
        key: 0,
        value: $.internalModelValue
      }) : J("", !0),
      $.$slots["month-year"] ? ue($.$slots, "month-year", ze(He({ key: 1 }, {
        years: s(d),
        selectYear: s(Y)
      }))) : (A(), Ae(Jt, {
        key: 2,
        items: s(d),
        "is-last": $.autoApply && !s(m).keepActionRow,
        height: s(m).modeHeight,
        config: $.config,
        "no-overlay-focus": !!($.noOverlayFocus || $.textInput),
        "focus-value": s(g),
        type: "year",
        "use-relative": "",
        onSelected: s(Y),
        onHoverValue: s(y)
      }, Ge({ _: 2 }, [
        $.$slots["year-overlay-value"] ? {
          name: "item",
          fn: we(({ item: te }) => [
            ue($.$slots, "year-overlay-value", {
              text: te.text,
              value: te.value
            })
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))
    ]));
  }
}), vr = {
  key: 0,
  class: "dp__time_input"
}, mr = ["data-compact", "data-collapsed"], pr = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], gr = ["aria-label", "disabled", "data-test-id", "onKeydown", "onClick"], yr = ["data-test-id", "aria-label", "onKeydown", "onClick", "onMousedown"], hr = { key: 0 }, br = ["aria-label", "data-compact"], kr = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: { type: Function, default: () => !1 },
    ...ut
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed",
    "overlay-opened",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { setTimePickerElements: d, setTimePickerBackRef: f } = Dt(), {
      defaultedAriaLabels: g,
      defaultedTransitions: Y,
      defaultedFilters: y,
      defaultedConfig: m,
      defaultedRange: T,
      defaultedMultiCalendars: $
    } = Be(n), { transitionName: w, showTransition: te } = Zt(Y), C = qt({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), W = ee("AM"), c = ee(null), N = ee([]), O = ee(), z = ee(!1);
    We(() => {
      a("mounted");
    });
    const K = (l) => Pe(/* @__PURE__ */ new Date(), {
      hours: l.hours,
      minutes: l.minutes,
      seconds: n.enableSeconds ? l.seconds : 0,
      milliseconds: 0
    }), oe = Q(
      () => (l) => S(l, n[l]) || R(l, n[l])
    ), q = Q(() => ({ hours: n.hours, minutes: n.minutes, seconds: n.seconds })), R = (l, _) => T.value.enabled && !T.value.disableTimeRangeValidation ? !n.validateTime(l, _) : !1, x = (l, _) => {
      if (T.value.enabled && !T.value.disableTimeRangeValidation) {
        const ne = _ ? +n[`${l}Increment`] : -+n[`${l}Increment`], X = n[l] + ne;
        return !n.validateTime(l, X);
      }
      return !1;
    }, B = Q(() => (l) => !Z(+n[l] + +n[`${l}Increment`], l) || x(l, !0)), G = Q(() => (l) => !Z(+n[l] - +n[`${l}Increment`], l) || x(l, !1)), de = (l, _) => $n(Pe(U(), l), _), ve = (l, _) => ul(Pe(U(), l), _), p = Q(
      () => ({
        dp__time_col: !0,
        dp__time_col_block: !n.timePickerInline,
        dp__time_col_reg_block: !n.enableSeconds && n.is24 && !n.timePickerInline,
        dp__time_col_reg_inline: !n.enableSeconds && n.is24 && n.timePickerInline,
        dp__time_col_reg_with_button: !n.enableSeconds && !n.is24,
        dp__time_col_sec: n.enableSeconds && n.is24,
        dp__time_col_sec_with_button: n.enableSeconds && !n.is24
      })
    ), I = Q(
      () => n.timePickerInline && T.value.enabled && !$.value.count
    ), re = Q(() => {
      const l = [{ type: "hours" }];
      return n.enableMinutes && l.push({ type: "", separator: !0 }, {
        type: "minutes"
      }), n.enableSeconds && l.push({ type: "", separator: !0 }, {
        type: "seconds"
      }), l;
    }), v = Q(() => re.value.filter((l) => !l.separator)), j = Q(() => (l) => {
      if (l === "hours") {
        const _ = me(+n.hours);
        return { text: _ < 10 ? `0${_}` : `${_}`, value: _ };
      }
      return { text: n[l] < 10 ? `0${n[l]}` : `${n[l]}`, value: n[l] };
    }), S = (l, _) => {
      var X;
      if (!n.disabledTimesConfig) return !1;
      const ne = n.disabledTimesConfig(n.order, l === "hours" ? _ : void 0);
      return ne[l] ? !!((X = ne[l]) != null && X.includes(_)) : !0;
    }, h = (l, _) => _ !== "hours" || W.value === "AM" ? l : l + 12, le = (l) => {
      const _ = n.is24 ? 24 : 12, ne = l === "hours" ? _ : 60, X = +n[`${l}GridIncrement`], se = l === "hours" && !n.is24 ? X : 0, he = [];
      for (let b = se; b < ne; b += X)
        he.push({ value: n.is24 ? b : h(b, l), text: b < 10 ? `0${b}` : `${b}` });
      return l === "hours" && !n.is24 && he.unshift({ value: W.value === "PM" ? 12 : 0, text: "12" }), It(he, (b) => ({ active: !1, disabled: y.value.times[l].includes(b.value) || !Z(b.value, l) || S(l, b.value) || R(l, b.value) }));
    }, E = (l) => l >= 0 ? l : 59, D = (l) => l >= 0 ? l : 23, Z = (l, _) => {
      const ne = n.minTime ? K(Sa(n.minTime)) : null, X = n.maxTime ? K(Sa(n.maxTime)) : null, se = K(
        Sa(
          q.value,
          _,
          _ === "minutes" || _ === "seconds" ? E(l) : D(l)
        )
      );
      return ne && X ? (Gt(se, X) || Bt(se, X)) && (_t(se, ne) || Bt(se, ne)) : ne ? _t(se, ne) || Bt(se, ne) : X ? Gt(se, X) || Bt(se, X) : !0;
    }, u = (l) => n[`no${l[0].toUpperCase() + l.slice(1)}Overlay`], k = (l) => {
      u(l) || (C[l] = !C[l], C[l] ? (z.value = !0, a("overlay-opened", l)) : (z.value = !1, a("overlay-closed", l)));
    }, F = (l) => l === "hours" ? gt : l === "minutes" ? wt : Yt, i = () => {
      O.value && clearTimeout(O.value);
    }, ae = (l, _ = !0, ne) => {
      const X = _ ? de : ve, se = _ ? +n[`${l}Increment`] : -+n[`${l}Increment`];
      Z(+n[l] + se, l) && a(
        `update:${l}`,
        F(l)(X({ [l]: +n[l] }, { [l]: +n[`${l}Increment`] }))
      ), !(ne != null && ne.keyboard) && m.value.timeArrowHoldThreshold && (O.value = setTimeout(() => {
        ae(l, _);
      }, m.value.timeArrowHoldThreshold));
    }, me = (l) => n.is24 ? l : (l >= 12 ? W.value = "PM" : W.value = "AM", kl(l)), P = () => {
      W.value === "PM" ? (W.value = "AM", a("update:hours", n.hours - 12)) : (W.value = "PM", a("update:hours", n.hours + 12)), a("am-pm-change", W.value);
    }, ge = (l) => {
      C[l] = !0;
    }, ce = (l, _, ne) => {
      if (l && n.arrowNavigation) {
        Array.isArray(N.value[_]) ? N.value[_][ne] = l : N.value[_] = [l];
        const X = N.value.reduce(
          (se, he) => he.map((b, L) => [...se[L] || [], he[L]]),
          []
        );
        f(n.closeTimePickerBtn), c.value && (X[1] = X[1].concat(c.value)), d(X, n.order);
      }
    }, Se = (l, _) => (k(l), a(`update:${l}`, _));
    return t({ openChildCmp: ge }), (l, _) => {
      var ne;
      return l.disabled ? J("", !0) : (A(), V("div", vr, [
        (A(!0), V(ke, null, Oe(re.value, (X, se) => {
          var he, b, L;
          return A(), V("div", {
            key: se,
            class: De(p.value),
            "data-compact": I.value && !l.enableSeconds,
            "data-collapsed": I.value && l.enableSeconds
          }, [
            X.separator ? (A(), V(ke, { key: 0 }, [
              z.value ? J("", !0) : (A(), V(ke, { key: 0 }, [
                pt(":")
              ], 64))
            ], 64)) : (A(), V(ke, { key: 1 }, [
              ye("button", {
                ref_for: !0,
                ref: (pe) => ce(pe, se, 0),
                type: "button",
                class: De({
                  dp__btn: !0,
                  dp__inc_dec_button: !l.timePickerInline,
                  dp__inc_dec_button_inline: l.timePickerInline,
                  dp__tp_inline_btn_top: l.timePickerInline,
                  dp__inc_dec_button_disabled: B.value(X.type),
                  "dp--hidden-el": z.value
                }),
                "data-test-id": `${X.type}-time-inc-btn-${n.order}`,
                "aria-label": (he = s(g)) == null ? void 0 : he.incrementValue(X.type),
                tabindex: "0",
                onKeydown: (pe) => s(qe)(pe, () => ae(X.type, !0, { keyboard: !0 }), !0),
                onClick: (pe) => s(m).timeArrowHoldThreshold ? void 0 : ae(X.type, !0),
                onMousedown: (pe) => s(m).timeArrowHoldThreshold ? ae(X.type, !0) : void 0,
                onMouseup: i
              }, [
                n.timePickerInline ? (A(), V(ke, { key: 1 }, [
                  l.$slots["tp-inline-arrow-up"] ? ue(l.$slots, "tp-inline-arrow-up", { key: 0 }) : (A(), V(ke, { key: 1 }, [
                    _[2] || (_[2] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    _[3] || (_[3] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (A(), V(ke, { key: 0 }, [
                  l.$slots["arrow-up"] ? ue(l.$slots, "arrow-up", { key: 0 }) : J("", !0),
                  l.$slots["arrow-up"] ? J("", !0) : (A(), Ae(s(ja), { key: 1 }))
                ], 64))
              ], 42, pr),
              ye("button", {
                ref_for: !0,
                ref: (pe) => ce(pe, se, 1),
                type: "button",
                "aria-label": `${j.value(X.type).text}-${(b = s(g)) == null ? void 0 : b.openTpOverlay(X.type)}`,
                class: De({
                  dp__time_display: !0,
                  dp__time_display_block: !l.timePickerInline,
                  dp__time_display_inline: l.timePickerInline,
                  "dp--time-invalid": oe.value(X.type),
                  "dp--time-overlay-btn": !oe.value(X.type),
                  "dp--hidden-el": z.value
                }),
                disabled: u(X.type),
                tabindex: "0",
                "data-test-id": `${X.type}-toggle-overlay-btn-${n.order}`,
                onKeydown: (pe) => s(qe)(pe, () => k(X.type), !0),
                onClick: (pe) => k(X.type)
              }, [
                l.$slots[X.type] ? ue(l.$slots, X.type, {
                  key: 0,
                  text: j.value(X.type).text,
                  value: j.value(X.type).value
                }) : J("", !0),
                l.$slots[X.type] ? J("", !0) : (A(), V(ke, { key: 1 }, [
                  pt(Ke(j.value(X.type).text), 1)
                ], 64))
              ], 42, gr),
              ye("button", {
                ref_for: !0,
                ref: (pe) => ce(pe, se, 2),
                type: "button",
                class: De({
                  dp__btn: !0,
                  dp__inc_dec_button: !l.timePickerInline,
                  dp__inc_dec_button_inline: l.timePickerInline,
                  dp__tp_inline_btn_bottom: l.timePickerInline,
                  dp__inc_dec_button_disabled: G.value(X.type),
                  "dp--hidden-el": z.value
                }),
                "data-test-id": `${X.type}-time-dec-btn-${n.order}`,
                "aria-label": (L = s(g)) == null ? void 0 : L.decrementValue(X.type),
                tabindex: "0",
                onKeydown: (pe) => s(qe)(pe, () => ae(X.type, !1, { keyboard: !0 }), !0),
                onClick: (pe) => s(m).timeArrowHoldThreshold ? void 0 : ae(X.type, !1),
                onMousedown: (pe) => s(m).timeArrowHoldThreshold ? ae(X.type, !1) : void 0,
                onMouseup: i
              }, [
                n.timePickerInline ? (A(), V(ke, { key: 1 }, [
                  l.$slots["tp-inline-arrow-down"] ? ue(l.$slots, "tp-inline-arrow-down", { key: 0 }) : (A(), V(ke, { key: 1 }, [
                    _[4] || (_[4] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1)),
                    _[5] || (_[5] = ye("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1))
                  ], 64))
                ], 64)) : (A(), V(ke, { key: 0 }, [
                  l.$slots["arrow-down"] ? ue(l.$slots, "arrow-down", { key: 0 }) : J("", !0),
                  l.$slots["arrow-down"] ? J("", !0) : (A(), Ae(s(Ka), { key: 1 }))
                ], 64))
              ], 42, yr)
            ], 64))
          ], 10, mr);
        }), 128)),
        l.is24 ? J("", !0) : (A(), V("div", hr, [
          l.$slots["am-pm-button"] ? ue(l.$slots, "am-pm-button", {
            key: 0,
            toggle: P,
            value: W.value
          }) : J("", !0),
          l.$slots["am-pm-button"] ? J("", !0) : (A(), V("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: c,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": (ne = s(g)) == null ? void 0 : ne.amPmButton,
            tabindex: "0",
            "data-compact": I.value,
            onClick: P,
            onKeydown: _[0] || (_[0] = (X) => s(qe)(X, () => P(), !0))
          }, Ke(W.value), 41, br))
        ])),
        (A(!0), V(ke, null, Oe(v.value, (X, se) => (A(), Ae(Et, {
          key: se,
          name: s(w)(C[X.type]),
          css: s(te)
        }, {
          default: we(() => {
            var he, b;
            return [
              C[X.type] ? (A(), Ae(Jt, {
                key: 0,
                items: le(X.type),
                "is-last": l.autoApply && !s(m).keepActionRow,
                "esc-close": l.escClose,
                type: X.type,
                "text-input": l.textInput,
                config: l.config,
                "arrow-navigation": l.arrowNavigation,
                "aria-labels": l.ariaLabels,
                "overlay-label": (b = (he = s(g)).timeOverlay) == null ? void 0 : b.call(he, X.type),
                onSelected: (L) => Se(X.type, L),
                onToggle: (L) => k(X.type),
                onResetFlow: _[1] || (_[1] = (L) => l.$emit("reset-flow"))
              }, Ge({
                "button-icon": we(() => [
                  l.$slots["clock-icon"] ? ue(l.$slots, "clock-icon", { key: 0 }) : J("", !0),
                  l.$slots["clock-icon"] ? J("", !0) : (A(), Ae(ca(l.timePickerInline ? s(Ft) : s(Va)), { key: 1 }))
                ]),
                _: 2
              }, [
                l.$slots[`${X.type}-overlay-value`] ? {
                  name: "item",
                  fn: we(({ item: L }) => [
                    ue(l.$slots, `${X.type}-overlay-value`, {
                      text: L.text,
                      value: L.value
                    })
                  ]),
                  key: "0"
                } : void 0,
                l.$slots[`${X.type}-overlay-header`] ? {
                  name: "header",
                  fn: we(() => [
                    ue(l.$slots, `${X.type}-overlay-header`, {
                      toggle: () => k(X.type)
                    })
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : J("", !0)
            ];
          }),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), wr = ["data-dp-mobile"], Dr = ["aria-label", "tabindex"], Mr = ["role", "aria-label", "tabindex"], $r = ["aria-label"], Wn = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    disabledTimesConfig: { type: Function, default: null },
    validateTime: {
      type: Function,
      default: () => !1
    },
    ...ut
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed",
    "am-pm-change"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { buildMatrix: d, setTimePicker: f } = Dt(), g = Rt(), { defaultedTransitions: Y, defaultedAriaLabels: y, defaultedTextInput: m, defaultedConfig: T, defaultedRange: $ } = Be(n), { transitionName: w, showTransition: te } = Zt(Y), { hideNavigationButtons: C } = ga(), W = ee(null), c = ee(null), N = ee([]), O = ee(null), z = ee(!1);
    We(() => {
      a("mount"), !n.timePicker && n.arrowNavigation ? d([Le(W.value)], "time") : f(!0, n.timePicker);
    });
    const K = Q(() => $.value.enabled && n.modelAuto ? Sn(n.internalModelValue) : !0), oe = ee(!1), q = (S) => ({
      hours: Array.isArray(n.hours) ? n.hours[S] : n.hours,
      minutes: Array.isArray(n.minutes) ? n.minutes[S] : n.minutes,
      seconds: Array.isArray(n.seconds) ? n.seconds[S] : n.seconds
    }), R = Q(() => {
      const S = [];
      if ($.value.enabled)
        for (let h = 0; h < 2; h++)
          S.push(q(h));
      else
        S.push(q(0));
      return S;
    }), x = (S, h = !1, le = "") => {
      h || a("reset-flow"), oe.value = S, a(S ? "overlay-opened" : "overlay-closed", je.time), n.arrowNavigation && f(S), at(() => {
        le !== "" && N.value[0] && N.value[0].openChildCmp(le);
      });
    }, B = Q(() => ({
      dp__btn: !0,
      dp__button: !0,
      dp__button_bottom: n.autoApply && !T.value.keepActionRow
    })), G = et(g, "timePicker"), de = (S, h, le) => $.value.enabled ? h === 0 ? [S, R.value[1][le]] : [R.value[0][le], S] : S, ve = (S) => {
      a("update:hours", S);
    }, p = (S) => {
      a("update:minutes", S);
    }, I = (S) => {
      a("update:seconds", S);
    }, re = () => {
      if (O.value && !m.value.enabled && !n.noOverlayFocus) {
        const S = Pn(O.value);
        S && S.focus({ preventScroll: !0 });
      }
    }, v = (S) => {
      z.value = !1, a("overlay-closed", S);
    }, j = (S) => {
      z.value = !0, a("overlay-opened", S);
    };
    return t({ toggleTimePicker: x }), (S, h) => {
      var le;
      return A(), V("div", {
        class: "dp--tp-wrap",
        "data-dp-mobile": S.isMobile
      }, [
        !S.timePicker && !S.timePickerInline ? oa((A(), V("button", {
          key: 0,
          ref_key: "openTimePickerBtn",
          ref: W,
          type: "button",
          class: De({ ...B.value, "dp--hidden-el": oe.value }),
          "aria-label": (le = s(y)) == null ? void 0 : le.openTimePicker,
          tabindex: S.noOverlayFocus ? void 0 : 0,
          "data-test-id": "open-time-picker-btn",
          onKeydown: h[0] || (h[0] = (E) => s(qe)(E, () => x(!0))),
          onClick: h[1] || (h[1] = (E) => x(!0))
        }, [
          S.$slots["clock-icon"] ? ue(S.$slots, "clock-icon", { key: 0 }) : J("", !0),
          S.$slots["clock-icon"] ? J("", !0) : (A(), Ae(s(Va), { key: 1 }))
        ], 42, Dr)), [
          [sa, !s(C)(S.hideNavigation, "time")]
        ]) : J("", !0),
        tt(Et, {
          name: s(w)(oe.value),
          css: s(te) && !S.timePickerInline
        }, {
          default: we(() => {
            var E, D;
            return [
              oe.value || S.timePicker || S.timePickerInline ? (A(), V("div", {
                key: 0,
                ref_key: "overlayRef",
                ref: O,
                role: S.timePickerInline ? void 0 : "dialog",
                class: De({
                  dp__overlay: !S.timePickerInline,
                  "dp--overlay-absolute": !n.timePicker && !S.timePickerInline,
                  "dp--overlay-relative": n.timePicker
                }),
                style: nt(S.timePicker ? { height: `${s(T).modeHeight}px` } : void 0),
                "aria-label": (E = s(y)) == null ? void 0 : E.timePicker,
                tabindex: S.timePickerInline ? void 0 : 0
              }, [
                ye("div", {
                  class: De(
                    S.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                  ),
                  style: { display: "flex" }
                }, [
                  S.$slots["time-picker-overlay"] ? ue(S.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: ve,
                    setMinutes: p,
                    setSeconds: I
                  }) : J("", !0),
                  S.$slots["time-picker-overlay"] ? J("", !0) : (A(), V("div", {
                    key: 1,
                    class: De(S.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                  }, [
                    (A(!0), V(ke, null, Oe(R.value, (Z, u) => oa((A(), Ae(kr, He({
                      key: u,
                      ref_for: !0
                    }, {
                      ...S.$props,
                      order: u,
                      hours: Z.hours,
                      minutes: Z.minutes,
                      seconds: Z.seconds,
                      closeTimePickerBtn: c.value,
                      disabledTimesConfig: e.disabledTimesConfig,
                      disabled: u === 0 ? s($).fixedStart : s($).fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: N,
                      "validate-time": (k, F) => e.validateTime(k, de(F, u, k)),
                      "onUpdate:hours": (k) => ve(de(k, u, "hours")),
                      "onUpdate:minutes": (k) => p(de(k, u, "minutes")),
                      "onUpdate:seconds": (k) => I(de(k, u, "seconds")),
                      onMounted: re,
                      onOverlayClosed: v,
                      onOverlayOpened: j,
                      onAmPmChange: h[2] || (h[2] = (k) => S.$emit("am-pm-change", k))
                    }), Ge({ _: 2 }, [
                      Oe(s(G), (k, F) => ({
                        name: k,
                        fn: we((i) => [
                          ue(S.$slots, k, He({ ref_for: !0 }, i))
                        ])
                      }))
                    ]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [sa, u === 0 ? !0 : K.value]
                    ])), 128))
                  ], 2)),
                  !S.timePicker && !S.timePickerInline ? oa((A(), V("button", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: c,
                    type: "button",
                    class: De({ ...B.value, "dp--hidden-el": z.value }),
                    "aria-label": (D = s(y)) == null ? void 0 : D.closeTimePicker,
                    tabindex: "0",
                    onKeydown: h[3] || (h[3] = (Z) => s(qe)(Z, () => x(!1))),
                    onClick: h[4] || (h[4] = (Z) => x(!1))
                  }, [
                    S.$slots["calendar-icon"] ? ue(S.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                    S.$slots["calendar-icon"] ? J("", !0) : (A(), Ae(s(Ft), { key: 1 }))
                  ], 42, $r)), [
                    [sa, !s(C)(S.hideNavigation, "time")]
                  ]) : J("", !0)
                ], 2)
              ], 14, Mr)) : J("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ], 8, wr);
    };
  }
}), Vn = (e, t, r, a) => {
  const { defaultedRange: n } = Be(e), d = (O, z) => Array.isArray(t[O]) ? t[O][z] : t[O], f = (O) => e.enableSeconds ? Array.isArray(t.seconds) ? t.seconds[O] : t.seconds : 0, g = (O, z) => O ? z !== void 0 ? kt(O, d("hours", z), d("minutes", z), f(z)) : kt(O, t.hours, t.minutes, f()) : hn(U(), f(z)), Y = (O, z) => {
    t[O] = z;
  }, y = Q(() => e.modelAuto && n.value.enabled ? Array.isArray(r.value) ? r.value.length > 1 : !1 : n.value.enabled), m = (O, z) => {
    const K = Object.fromEntries(
      Object.keys(t).map((oe) => oe === O ? [oe, z] : [oe, t[oe]].slice())
    );
    if (y.value && !n.value.disableTimeRangeValidation) {
      const oe = (R) => r.value ? kt(
        r.value[R],
        K.hours[R],
        K.minutes[R],
        K.seconds[R]
      ) : null, q = (R) => bn(r.value[R], 0);
      return !($e(oe(0), oe(1)) && (_t(oe(0), q(1)) || Gt(oe(1), q(0))));
    }
    return !0;
  }, T = (O, z) => {
    m(O, z) && (Y(O, z), a && a());
  }, $ = (O) => {
    T("hours", O);
  }, w = (O) => {
    T("minutes", O);
  }, te = (O) => {
    T("seconds", O);
  }, C = (O, z, K, oe) => {
    z && $(O), !z && !K && w(O), K && te(O), r.value && oe(r.value);
  }, W = (O) => {
    if (O) {
      const z = Array.isArray(O), K = z ? [+O[0].hours, +O[1].hours] : +O.hours, oe = z ? [+O[0].minutes, +O[1].minutes] : +O.minutes, q = z ? [+O[0].seconds, +O[1].seconds] : +O.seconds;
      Y("hours", K), Y("minutes", oe), e.enableSeconds && Y("seconds", q);
    }
  }, c = (O, z) => {
    const K = {
      hours: Array.isArray(t.hours) ? t.hours[O] : t.hours,
      disabledArr: []
    };
    return (z || z === 0) && (K.hours = z), Array.isArray(e.disabledTimes) && (K.disabledArr = n.value.enabled && Array.isArray(e.disabledTimes[O]) ? e.disabledTimes[O] : e.disabledTimes), K;
  }, N = Q(() => (O, z) => {
    var K;
    if (Array.isArray(e.disabledTimes)) {
      const { disabledArr: oe, hours: q } = c(O, z), R = oe.filter((x) => +x.hours === q);
      return ((K = R[0]) == null ? void 0 : K.minutes) === "*" ? { hours: [q], minutes: void 0, seconds: void 0 } : {
        hours: [],
        minutes: (R == null ? void 0 : R.map((x) => +x.minutes)) ?? [],
        seconds: (R == null ? void 0 : R.map((x) => x.seconds ? +x.seconds : void 0)) ?? []
      };
    }
    return { hours: [], minutes: [], seconds: [] };
  });
  return {
    setTime: Y,
    updateHours: $,
    updateMinutes: w,
    updateSeconds: te,
    getSetDateTime: g,
    updateTimeValues: C,
    getSecondsValue: f,
    assignStartTime: W,
    validateTime: m,
    disabledTimesConfig: N
  };
}, Ar = (e, t) => {
  const r = () => {
    e.isTextInputDate && z();
  }, { modelValue: a, time: n } = xt(e, t, r), { defaultedStartTime: d, defaultedRange: f, defaultedTz: g } = Be(e), { updateTimeValues: Y, getSetDateTime: y, setTime: m, assignStartTime: T, disabledTimesConfig: $, validateTime: w } = Vn(e, n, a, te);
  function te() {
    t("update-flow-step");
  }
  const C = (q) => {
    const { hours: R, minutes: x, seconds: B } = q;
    return { hours: +R, minutes: +x, seconds: B ? +B : 0 };
  }, W = () => {
    if (e.startTime) {
      if (Array.isArray(e.startTime)) {
        const R = C(e.startTime[0]), x = C(e.startTime[1]);
        return [Pe(U(), R), Pe(U(), x)];
      }
      const q = C(e.startTime);
      return Pe(U(), q);
    }
    return f.value.enabled ? [null, null] : null;
  }, c = () => {
    if (f.value.enabled) {
      const [q, R] = W();
      a.value = [
        Ze(y(q, 0), g.value.timezone),
        Ze(y(R, 1), g.value.timezone)
      ];
    } else
      a.value = Ze(y(W()), g.value.timezone);
  }, N = (q) => Array.isArray(q) ? [Pt(U(q[0])), Pt(U(q[1]))] : [Pt(q ?? U())], O = (q, R, x) => {
    m("hours", q), m("minutes", R), m("seconds", e.enableSeconds ? x : 0);
  }, z = () => {
    const [q, R] = N(a.value);
    return f.value.enabled ? O(
      [q.hours, R.hours],
      [q.minutes, R.minutes],
      [q.seconds, R.seconds]
    ) : O(q.hours, q.minutes, q.seconds);
  };
  We(() => {
    if (!e.shadow)
      return T(d.value), a.value ? z() : c();
  });
  const K = () => {
    Array.isArray(a.value) ? a.value = a.value.map((q, R) => q && y(q, R)) : a.value = y(a.value), t("time-update");
  };
  return {
    modelValue: a,
    time: n,
    disabledTimesConfig: $,
    updateTime: (q, R = !0, x = !1) => {
      Y(q, R, x, K);
    },
    validateTime: w
  };
}, Tr = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "TimePickerSolo",
  props: {
    ...ut
  },
  emits: [
    "update:internal-model-value",
    "time-update",
    "am-pm-change",
    "mount",
    "reset-flow",
    "update-flow-step",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, d = Rt(), f = et(d, "timePicker"), g = ee(null), { time: Y, modelValue: y, disabledTimesConfig: m, updateTime: T, validateTime: $ } = Ar(n, a);
    return We(() => {
      n.shadow || a("mount", null);
    }), t({ getSidebarProps: () => ({
      modelValue: y,
      time: Y,
      updateTime: T
    }), toggleTimePicker: (C, W = !1, c = "") => {
      var N;
      (N = g.value) == null || N.toggleTimePicker(C, W, c);
    } }), (C, W) => (A(), Ae(ma, {
      "multi-calendars": 0,
      stretch: "",
      "is-mobile": C.isMobile
    }, {
      default: we(() => [
        tt(Wn, He({
          ref_key: "tpRef",
          ref: g
        }, C.$props, {
          hours: s(Y).hours,
          minutes: s(Y).minutes,
          seconds: s(Y).seconds,
          "internal-model-value": C.internalModelValue,
          "disabled-times-config": s(m),
          "validate-time": s($),
          "onUpdate:hours": W[0] || (W[0] = (c) => s(T)(c)),
          "onUpdate:minutes": W[1] || (W[1] = (c) => s(T)(c, !1)),
          "onUpdate:seconds": W[2] || (W[2] = (c) => s(T)(c, !1, !0)),
          onAmPmChange: W[3] || (W[3] = (c) => C.$emit("am-pm-change", c)),
          onResetFlow: W[4] || (W[4] = (c) => C.$emit("reset-flow")),
          onOverlayClosed: W[5] || (W[5] = (c) => C.$emit("overlay-toggle", { open: !1, overlay: c })),
          onOverlayOpened: W[6] || (W[6] = (c) => C.$emit("overlay-toggle", { open: !0, overlay: c }))
        }), Ge({ _: 2 }, [
          Oe(s(f), (c, N) => ({
            name: c,
            fn: we((O) => [
              ue(C.$slots, c, ze(Je(O)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])
      ]),
      _: 3
    }, 8, ["is-mobile"]));
  }
}), Sr = { class: "dp--header-wrap" }, Pr = {
  key: 0,
  class: "dp__month_year_wrap"
}, Rr = { key: 0 }, Cr = { class: "dp__month_year_wrap" }, Or = ["data-dp-element", "aria-label", "data-test-id", "onClick", "onKeydown"], Br = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "DpHeader",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    ...ut
  },
  emits: ["update-month-year", "mount", "reset-flow", "overlay-closed", "overlay-opened"],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      defaultedTransitions: d,
      defaultedAriaLabels: f,
      defaultedMultiCalendars: g,
      defaultedFilters: Y,
      defaultedConfig: y,
      defaultedHighlight: m,
      propDates: T,
      defaultedUI: $
    } = Be(n), { transitionName: w, showTransition: te } = Zt(d), { buildMatrix: C } = Dt(), { handleMonthYearChange: W, isDisabled: c, updateMonthYear: N } = Zl(n, a), { showLeftIcon: O, showRightIcon: z } = ga(), K = ee(!1), oe = ee(!1), q = ee(!1), R = ee([null, null, null, null]);
    We(() => {
      a("mount");
    });
    const x = (D) => ({
      get: () => n[D],
      set: (Z) => {
        const u = D === rt.month ? rt.year : rt.month;
        a("update-month-year", { [D]: Z, [u]: n[u] }), D === rt.month ? v(!0) : j(!0);
      }
    }), B = Q(x(rt.month)), G = Q(x(rt.year)), de = Q(() => (D) => ({
      month: n.month,
      year: n.year,
      items: D === rt.month ? n.months : n.years,
      instance: n.instance,
      updateMonthYear: N,
      toggle: D === rt.month ? v : j
    })), ve = Q(() => {
      const D = n.months.find((Z) => Z.value === n.month);
      return D || { text: "", value: 0 };
    }), p = Q(() => It(n.months, (D) => {
      const Z = n.month === D.value, u = Qt(
        D.value,
        Cn(n.year, T.value.minDate),
        On(n.year, T.value.maxDate)
      ) || Y.value.months.includes(D.value), k = Nn(m.value, D.value, n.year);
      return { active: Z, disabled: u, highlighted: k };
    })), I = Q(() => It(n.years, (D) => {
      const Z = n.year === D.value, u = Qt(
        D.value,
        Nt(T.value.minDate),
        Nt(T.value.maxDate)
      ) || Y.value.years.includes(D.value), k = Ja(m.value, D.value);
      return { active: Z, disabled: u, highlighted: k };
    })), re = (D, Z, u) => {
      u !== void 0 ? D.value = u : D.value = !D.value, D.value ? (q.value = !0, a("overlay-opened", Z)) : (q.value = !1, a("overlay-closed", Z));
    }, v = (D = !1, Z) => {
      S(D), re(K, je.month, Z);
    }, j = (D = !1, Z) => {
      S(D), re(oe, je.year, Z);
    }, S = (D) => {
      D || a("reset-flow");
    }, h = (D, Z) => {
      n.arrowNavigation && (R.value[Z] = Le(D), C(R.value, "monthYear"));
    }, le = Q(() => {
      var D, Z, u, k, F, i;
      return [
        {
          type: rt.month,
          index: 1,
          toggle: v,
          modelValue: B.value,
          updateModelValue: (ae) => B.value = ae,
          text: ve.value.text,
          showSelectionGrid: K.value,
          items: p.value,
          ariaLabel: (D = f.value) == null ? void 0 : D.openMonthsOverlay,
          overlayLabel: ((u = (Z = f.value).monthPicker) == null ? void 0 : u.call(Z, !0)) ?? void 0
        },
        {
          type: rt.year,
          index: 2,
          toggle: j,
          modelValue: G.value,
          updateModelValue: (ae) => G.value = ae,
          text: Rn(n.year, n.locale),
          showSelectionGrid: oe.value,
          items: I.value,
          ariaLabel: (k = f.value) == null ? void 0 : k.openYearsOverlay,
          overlayLabel: ((i = (F = f.value).yearPicker) == null ? void 0 : i.call(F, !0)) ?? void 0
        }
      ];
    }), E = Q(() => n.disableYearSelect ? [le.value[0]] : n.yearFirst ? [...le.value].reverse() : le.value);
    return t({
      toggleMonthPicker: v,
      toggleYearPicker: j,
      handleMonthYearChange: W
    }), (D, Z) => {
      var u, k, F, i, ae, me;
      return A(), V("div", Sr, [
        D.$slots["month-year"] ? (A(), V("div", Pr, [
          ue(D.$slots, "month-year", ze(Je({ month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: s(N), handleMonthYearChange: s(W), instance: e.instance })))
        ])) : (A(), V(ke, { key: 1 }, [
          D.$slots["top-extra"] ? (A(), V("div", Rr, [
            ue(D.$slots, "top-extra", { value: D.internalModelValue })
          ])) : J("", !0),
          ye("div", Cr, [
            s(O)(s(g), e.instance) && !D.vertical ? (A(), Ae(Wt, {
              key: 0,
              "aria-label": (u = s(f)) == null ? void 0 : u.prevMonth,
              disabled: s(c)(!1),
              class: De((k = s($)) == null ? void 0 : k.navBtnPrev),
              "el-name": "action-prev",
              onActivate: Z[0] || (Z[0] = (P) => s(W)(!1, !0)),
              onSetRef: Z[1] || (Z[1] = (P) => h(P, 0))
            }, {
              default: we(() => [
                D.$slots["arrow-left"] ? ue(D.$slots, "arrow-left", { key: 0 }) : J("", !0),
                D.$slots["arrow-left"] ? J("", !0) : (A(), Ae(s(Ua), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : J("", !0),
            ye("div", {
              class: De(["dp__month_year_wrap", {
                dp__year_disable_select: D.disableYearSelect
              }])
            }, [
              (A(!0), V(ke, null, Oe(E.value, (P, ge) => (A(), V(ke, {
                key: P.type
              }, [
                ye("button", {
                  ref_for: !0,
                  ref: (ce) => h(ce, ge + 1),
                  type: "button",
                  "data-dp-element": `overlay-${P.type}`,
                  class: De(["dp__btn dp__month_year_select", { "dp--hidden-el": q.value }]),
                  "aria-label": `${P.text}-${P.ariaLabel}`,
                  "data-test-id": `${P.type}-toggle-overlay-${e.instance}`,
                  onClick: P.toggle,
                  onKeydown: (ce) => s(qe)(ce, () => P.toggle(), !0)
                }, [
                  D.$slots[P.type] ? ue(D.$slots, P.type, {
                    key: 0,
                    text: P.text,
                    value: n[P.type]
                  }) : J("", !0),
                  D.$slots[P.type] ? J("", !0) : (A(), V(ke, { key: 1 }, [
                    pt(Ke(P.text), 1)
                  ], 64))
                ], 42, Or),
                tt(Et, {
                  name: s(w)(P.showSelectionGrid),
                  css: s(te)
                }, {
                  default: we(() => [
                    P.showSelectionGrid ? (A(), Ae(Jt, {
                      key: 0,
                      items: P.items,
                      "arrow-navigation": D.arrowNavigation,
                      "hide-navigation": D.hideNavigation,
                      "is-last": D.autoApply && !s(y).keepActionRow,
                      "skip-button-ref": !1,
                      config: D.config,
                      type: P.type,
                      "header-refs": [],
                      "esc-close": D.escClose,
                      "menu-wrap-ref": D.menuWrapRef,
                      "text-input": D.textInput,
                      "aria-labels": D.ariaLabels,
                      "overlay-label": P.overlayLabel,
                      onSelected: P.updateModelValue,
                      onToggle: P.toggle
                    }, Ge({
                      "button-icon": we(() => [
                        D.$slots["calendar-icon"] ? ue(D.$slots, "calendar-icon", { key: 0 }) : J("", !0),
                        D.$slots["calendar-icon"] ? J("", !0) : (A(), Ae(s(Ft), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      D.$slots[`${P.type}-overlay-value`] ? {
                        name: "item",
                        fn: we(({ item: ce }) => [
                          ue(D.$slots, `${P.type}-overlay-value`, {
                            text: ce.text,
                            value: ce.value
                          })
                        ]),
                        key: "0"
                      } : void 0,
                      D.$slots[`${P.type}-overlay`] ? {
                        name: "overlay",
                        fn: we(() => [
                          ue(D.$slots, `${P.type}-overlay`, He({ ref_for: !0 }, de.value(P.type)))
                        ]),
                        key: "1"
                      } : void 0,
                      D.$slots[`${P.type}-overlay-header`] ? {
                        name: "header",
                        fn: we(() => [
                          ue(D.$slots, `${P.type}-overlay-header`, {
                            toggle: P.toggle
                          })
                        ]),
                        key: "2"
                      } : void 0
                    ]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "menu-wrap-ref", "text-input", "aria-labels", "overlay-label", "onSelected", "onToggle"])) : J("", !0)
                  ]),
                  _: 2
                }, 1032, ["name", "css"])
              ], 64))), 128))
            ], 2),
            s(O)(s(g), e.instance) && D.vertical ? (A(), Ae(Wt, {
              key: 1,
              "aria-label": (F = s(f)) == null ? void 0 : F.prevMonth,
              "el-name": "action-prev",
              disabled: s(c)(!1),
              class: De((i = s($)) == null ? void 0 : i.navBtnPrev),
              onActivate: Z[2] || (Z[2] = (P) => s(W)(!1, !0))
            }, {
              default: we(() => [
                D.$slots["arrow-up"] ? ue(D.$slots, "arrow-up", { key: 0 }) : J("", !0),
                D.$slots["arrow-up"] ? J("", !0) : (A(), Ae(s(ja), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled", "class"])) : J("", !0),
            s(z)(s(g), e.instance) ? (A(), Ae(Wt, {
              key: 2,
              ref: "rightIcon",
              "el-name": "action-next",
              disabled: s(c)(!0),
              "aria-label": (ae = s(f)) == null ? void 0 : ae.nextMonth,
              class: De((me = s($)) == null ? void 0 : me.navBtnNext),
              onActivate: Z[3] || (Z[3] = (P) => s(W)(!0, !0)),
              onSetRef: Z[4] || (Z[4] = (P) => h(P, D.disableYearSelect ? 2 : 3))
            }, {
              default: we(() => [
                D.$slots[D.vertical ? "arrow-down" : "arrow-right"] ? ue(D.$slots, D.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : J("", !0),
                D.$slots[D.vertical ? "arrow-down" : "arrow-right"] ? J("", !0) : (A(), Ae(ca(D.vertical ? s(Ka) : s(Wa)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label", "class"])) : J("", !0)
          ])
        ], 64))
      ]);
    };
  }
}), _r = {
  class: "dp__calendar_header",
  role: "row"
}, Yr = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, Ir = ["aria-label"], Nr = {
  key: 0,
  class: "dp__calendar_item dp__week_num",
  role: "gridcell"
}, Er = { class: "dp__cell_inner" }, Fr = ["id", "aria-pressed", "aria-disabled", "aria-label", "tabindex", "data-test-id", "onClick", "onTouchend", "onKeydown", "onMouseenter", "onMouseleave", "onMousedown"], Lr = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "DpCalendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...ut
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, { buildMultiLevelMatrix: d } = Dt(), {
      defaultedTransitions: f,
      defaultedConfig: g,
      defaultedAriaLabels: Y,
      defaultedMultiCalendars: y,
      defaultedWeekNumbers: m,
      defaultedMultiDates: T,
      defaultedUI: $
    } = Be(n), w = ee(null), te = ee({
      bottom: "",
      left: "",
      transform: ""
    }), C = ee([]), W = ee(null), c = ee(!0), N = ee(""), O = ee({ startX: 0, endX: 0, startY: 0, endY: 0 }), z = ee([]), K = ee({ left: "50%" }), oe = ee(!1), q = Q(() => n.calendar ? n.calendar(n.mappedDates) : n.mappedDates), R = Q(() => n.dayNames ? Array.isArray(n.dayNames) ? n.dayNames : n.dayNames(n.locale, +n.weekStart) : bl(n.formatLocale, n.locale, +n.weekStart));
    We(() => {
      a("mount", { cmp: "calendar", refs: C }), g.value.noSwipe || W.value && (W.value.addEventListener("touchstart", h, { passive: !1 }), W.value.addEventListener("touchend", le, { passive: !1 }), W.value.addEventListener("touchmove", E, { passive: !1 })), n.monthChangeOnScroll && W.value && W.value.addEventListener("wheel", u, { passive: !1 });
    });
    const x = (P) => P ? n.vertical ? "vNext" : "next" : n.vertical ? "vPrevious" : "previous", B = (P, ge) => {
      if (n.transitions) {
        const ce = Xe(mt(U(), n.month, n.year));
        N.value = Ie(Xe(mt(U(), P, ge)), ce) ? f.value[x(!0)] : f.value[x(!1)], c.value = !1, at(() => {
          c.value = !0;
        });
      }
    }, G = Q(
      () => ({
        ...$.value.calendar ?? {}
      })
    ), de = Q(() => (P) => {
      const ge = wl(P);
      return {
        dp__marker_dot: ge.type === "dot",
        dp__marker_line: ge.type === "line"
      };
    }), ve = Q(() => (P) => $e(P, w.value)), p = Q(() => ({
      dp__calendar: !0,
      dp__calendar_next: y.value.count > 0 && n.instance !== 0
    })), I = Q(() => (P) => n.hideOffsetDates ? P.current : !0), re = async (P, ge) => {
      const { width: ce, height: Se } = P.getBoundingClientRect();
      w.value = ge.value;
      let l = { left: `${ce / 2}px` }, _ = -50;
      if (await at(), z.value[0]) {
        const { left: ne, width: X } = z.value[0].getBoundingClientRect();
        ne < 0 && (l = { left: "0" }, _ = 0, K.value.left = `${ce / 2}px`), window.innerWidth < ne + X && (l = { right: "0" }, _ = 0, K.value.left = `${X - ce / 2}px`);
      }
      te.value = {
        bottom: `${Se}px`,
        ...l,
        transform: `translateX(${_}%)`
      };
    }, v = async (P, ge, ce) => {
      var l, _, ne;
      const Se = Le(C.value[ge][ce]);
      Se && ((l = P.marker) != null && l.customPosition && ((ne = (_ = P.marker) == null ? void 0 : _.tooltip) != null && ne.length) ? te.value = P.marker.customPosition(Se) : await re(Se, P), a("tooltip-open", P.marker));
    }, j = async (P, ge, ce) => {
      var Se, l;
      if (oe.value && T.value.enabled && T.value.dragSelect)
        return a("select-date", P);
      if (a("set-hover-date", P), (l = (Se = P.marker) == null ? void 0 : Se.tooltip) != null && l.length) {
        if (n.hideOffsetDates && !P.current) return;
        await v(P, ge, ce);
      }
    }, S = (P) => {
      w.value && (w.value = null, te.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), a("tooltip-close", P.marker));
    }, h = (P) => {
      O.value.startX = P.changedTouches[0].screenX, O.value.startY = P.changedTouches[0].screenY;
    }, le = (P) => {
      O.value.endX = P.changedTouches[0].screenX, O.value.endY = P.changedTouches[0].screenY, D();
    }, E = (P) => {
      n.vertical && !n.inline && P.preventDefault();
    }, D = () => {
      const P = n.vertical ? "Y" : "X";
      Math.abs(O.value[`start${P}`] - O.value[`end${P}`]) > 10 && a("handle-swipe", O.value[`start${P}`] > O.value[`end${P}`] ? "right" : "left");
    }, Z = (P, ge, ce) => {
      P && (Array.isArray(C.value[ge]) ? C.value[ge][ce] = P : C.value[ge] = [P]), n.arrowNavigation && d(C.value, "calendar");
    }, u = (P) => {
      n.monthChangeOnScroll && (P.preventDefault(), a("handle-scroll", P));
    }, k = (P) => m.value.type === "local" ? il(P.value, { weekStartsOn: +n.weekStart }) : m.value.type === "iso" ? dl(P.value) : typeof m.value.type == "function" ? m.value.type(P.value) : "", F = (P) => {
      const ge = P[0];
      return m.value.hideOnOffsetDates ? P.some((ce) => ce.current) ? k(ge) : "" : k(ge);
    }, i = (P, ge, ce = !0) => {
      ce && dn() || !ce && !dn() || (!T.value.enabled || g.value.allowPreventDefault) && (bt(P, g.value), a("select-date", ge));
    }, ae = (P) => {
      bt(P, g.value);
    }, me = (P) => {
      T.value.enabled && T.value.dragSelect ? (oe.value = !0, a("select-date", P)) : T.value.enabled && a("select-date", P);
    };
    return t({ triggerTransition: B }), (P, ge) => (A(), V("div", {
      class: De(p.value)
    }, [
      ye("div", {
        ref_key: "calendarWrapRef",
        ref: W,
        class: De(G.value),
        role: "grid"
      }, [
        ye("div", _r, [
          P.weekNumbers ? (A(), V("div", Yr, Ke(P.weekNumName), 1)) : J("", !0),
          (A(!0), V(ke, null, Oe(R.value, (ce, Se) => {
            var l, _;
            return A(), V("div", {
              key: Se,
              class: "dp__calendar_header_item",
              role: "gridcell",
              "data-test-id": "calendar-header",
              "aria-label": (_ = (l = s(Y)) == null ? void 0 : l.weekDay) == null ? void 0 : _.call(l, Se)
            }, [
              P.$slots["calendar-header"] ? ue(P.$slots, "calendar-header", {
                key: 0,
                day: ce,
                index: Se
              }) : J("", !0),
              P.$slots["calendar-header"] ? J("", !0) : (A(), V(ke, { key: 1 }, [
                pt(Ke(ce), 1)
              ], 64))
            ], 8, Ir);
          }), 128))
        ]),
        ge[2] || (ge[2] = ye("div", { class: "dp__calendar_header_separator" }, null, -1)),
        tt(Et, {
          name: N.value,
          css: !!P.transitions
        }, {
          default: we(() => [
            c.value ? (A(), V("div", {
              key: 0,
              class: "dp__calendar",
              role: "rowgroup",
              onMouseleave: ge[1] || (ge[1] = (ce) => oe.value = !1)
            }, [
              (A(!0), V(ke, null, Oe(q.value, (ce, Se) => (A(), V("div", {
                key: Se,
                class: "dp__calendar_row",
                role: "row"
              }, [
                P.weekNumbers ? (A(), V("div", Nr, [
                  ye("div", Er, Ke(F(ce.days)), 1)
                ])) : J("", !0),
                (A(!0), V(ke, null, Oe(ce.days, (l, _) => {
                  var ne, X, se;
                  return A(), V("div", {
                    id: s(En)(l.value),
                    ref_for: !0,
                    ref: (he) => Z(he, Se, _),
                    key: _ + Se,
                    role: "gridcell",
                    class: "dp__calendar_item",
                    "aria-pressed": (l.classData.dp__active_date || l.classData.dp__range_start || l.classData.dp__range_start) ?? void 0,
                    "aria-disabled": l.classData.dp__cell_disabled || void 0,
                    "aria-label": (X = (ne = s(Y)) == null ? void 0 : ne.day) == null ? void 0 : X.call(ne, l),
                    tabindex: !l.current && P.hideOffsetDates ? void 0 : 0,
                    "data-test-id": l.value,
                    onClick: jt((he) => i(he, l), ["prevent"]),
                    onTouchend: (he) => i(he, l, !1),
                    onKeydown: (he) => s(qe)(he, () => P.$emit("select-date", l)),
                    onMouseenter: (he) => j(l, Se, _),
                    onMouseleave: (he) => S(l),
                    onMousedown: (he) => me(l),
                    onMouseup: ge[0] || (ge[0] = (he) => oe.value = !1)
                  }, [
                    ye("div", {
                      class: De(["dp__cell_inner", l.classData])
                    }, [
                      P.$slots.day && I.value(l) ? ue(P.$slots, "day", {
                        key: 0,
                        day: +l.text,
                        date: l.value
                      }) : J("", !0),
                      P.$slots.day ? J("", !0) : (A(), V(ke, { key: 1 }, [
                        pt(Ke(l.text), 1)
                      ], 64)),
                      l.marker && I.value(l) ? (A(), V(ke, { key: 2 }, [
                        P.$slots.marker ? ue(P.$slots, "marker", {
                          key: 0,
                          marker: l.marker,
                          day: +l.text,
                          date: l.value
                        }) : (A(), V("div", {
                          key: 1,
                          class: De(de.value(l.marker)),
                          style: nt(l.marker.color ? { backgroundColor: l.marker.color } : {})
                        }, null, 6))
                      ], 64)) : J("", !0),
                      ve.value(l.value) ? (A(), V("div", {
                        key: 3,
                        ref_for: !0,
                        ref_key: "activeTooltip",
                        ref: z,
                        class: "dp__marker_tooltip",
                        style: nt(te.value)
                      }, [
                        (se = l.marker) != null && se.tooltip ? (A(), V("div", {
                          key: 0,
                          class: "dp__tooltip_content",
                          onClick: ae
                        }, [
                          (A(!0), V(ke, null, Oe(l.marker.tooltip, (he, b) => (A(), V("div", {
                            key: b,
                            class: "dp__tooltip_text"
                          }, [
                            P.$slots["marker-tooltip"] ? ue(P.$slots, "marker-tooltip", {
                              key: 0,
                              tooltip: he,
                              day: l.value
                            }) : J("", !0),
                            P.$slots["marker-tooltip"] ? J("", !0) : (A(), V(ke, { key: 1 }, [
                              ye("div", {
                                class: "dp__tooltip_mark",
                                style: nt(he.color ? { backgroundColor: he.color } : {})
                              }, null, 4),
                              ye("div", null, Ke(he.text), 1)
                            ], 64))
                          ]))), 128)),
                          ye("div", {
                            class: "dp__arrow_bottom_tp",
                            style: nt(K.value)
                          }, null, 4)
                        ])) : J("", !0)
                      ], 4)) : J("", !0)
                    ], 2)
                  ], 40, Fr);
                }), 128))
              ]))), 128))
            ], 32)) : J("", !0)
          ]),
          _: 3
        }, 8, ["name", "css"])
      ], 2)
    ], 2));
  }
}), pn = (e) => Array.isArray(e), zr = (e, t, r, a) => {
  const n = ee([]), d = ee([]), f = ee(/* @__PURE__ */ new Date()), g = ee(), Y = () => le(e.isTextInputDate), { modelValue: y, calendars: m, time: T, today: $ } = xt(e, t, Y), {
    defaultedMultiCalendars: w,
    defaultedStartTime: te,
    defaultedRange: C,
    defaultedConfig: W,
    defaultedTz: c,
    propDates: N,
    defaultedMultiDates: O
  } = Be(e), { validateMonthYearInRange: z, isDisabled: K, isDateRangeAllowed: oe, checkMinMaxRange: q } = Mt(e), { updateTimeValues: R, getSetDateTime: x, setTime: B, assignStartTime: G, validateTime: de, disabledTimesConfig: ve } = Vn(e, T, y, a), p = Q(
    () => (o) => m.value[o] ? m.value[o].month : 0
  ), I = Q(
    () => (o) => m.value[o] ? m.value[o].year : 0
  ), re = (o) => !W.value.keepViewOnOffsetClick || o ? !0 : !g.value, v = (o, M, H, be = !1) => {
    var Te, xe;
    re(be) && (m.value[o] || (m.value[o] = { month: 0, year: 0 }), m.value[o].month = un(M) ? (Te = m.value[o]) == null ? void 0 : Te.month : M, m.value[o].year = un(H) ? (xe = m.value[o]) == null ? void 0 : xe.year : H);
  }, j = () => {
    e.autoApply && t("select-date");
  };
  We(() => {
    e.shadow || (y.value || (ge(), te.value && G(te.value)), le(!0), e.focusStartDate && e.startDate && ge());
  });
  const S = Q(() => {
    var o;
    return (o = e.flow) != null && o.length && !e.partialFlow ? e.flowStep === e.flow.length : !0;
  }), h = () => {
    e.autoApply && S.value && t("auto-apply", e.partialFlow ? e.flowStep !== e.flow.length : !1);
  }, le = (o = !1) => {
    if (y.value)
      return Array.isArray(y.value) ? (n.value = y.value, i(o)) : Z(y.value, o);
    if (w.value.count && o && !e.startDate)
      return D(U(), o);
  }, E = () => Array.isArray(y.value) && C.value.enabled ? Me(y.value[0]) === Me(y.value[1] ?? y.value[0]) : !1, D = (o = /* @__PURE__ */ new Date(), M = !1) => {
    if ((!w.value.count || !w.value.static || M) && v(0, Me(o), fe(o)), w.value.count && (!y.value || E() || !w.value.solo) && (!w.value.solo || M))
      for (let H = 1; H < w.value.count; H++) {
        const be = Pe(U(), { month: p.value(H - 1), year: I.value(H - 1) }), Te = $n(be, { months: 1 });
        m.value[H] = { month: Me(Te), year: fe(Te) };
      }
  }, Z = (o, M) => {
    D(o), B("hours", gt(o)), B("minutes", wt(o)), B("seconds", Yt(o)), w.value.count && M && P();
  }, u = (o) => {
    if (w.value.count) {
      if (w.value.solo) return 0;
      const M = Me(o[0]), H = Me(o[1]);
      return Math.abs(H - M) < w.value.count ? 0 : 1;
    }
    return 1;
  }, k = (o, M) => {
    o[1] && C.value.showLastInRange ? D(o[u(o)], M) : D(o[0], M);
    const H = (be, Te) => [
      be(o[0]),
      o[1] ? be(o[1]) : T[Te][1]
    ];
    B("hours", H(gt, "hours")), B("minutes", H(wt, "minutes")), B("seconds", H(Yt, "seconds"));
  }, F = (o, M) => {
    if ((C.value.enabled || e.weekPicker) && !O.value.enabled)
      return k(o, M);
    if (O.value.enabled && M) {
      const H = o[o.length - 1];
      return Z(H, M);
    }
  }, i = (o) => {
    const M = y.value;
    F(M, o), w.value.count && w.value.solo && P();
  }, ae = (o, M) => {
    const H = Pe(U(), { month: p.value(M), year: I.value(M) }), be = o < 0 ? Tt(H, 1) : Kt(H, 1);
    z(Me(be), fe(be), o < 0, e.preventMinMaxNavigation) && (v(M, Me(be), fe(be)), t("update-month-year", { instance: M, month: Me(be), year: fe(be) }), w.value.count && !w.value.solo && me(M), r());
  }, me = (o) => {
    for (let M = o - 1; M >= 0; M--) {
      const H = Kt(Pe(U(), { month: p.value(M + 1), year: I.value(M + 1) }), 1);
      v(M, Me(H), fe(H));
    }
    for (let M = o + 1; M <= w.value.count - 1; M++) {
      const H = Tt(Pe(U(), { month: p.value(M - 1), year: I.value(M - 1) }), 1);
      v(M, Me(H), fe(H));
    }
  }, P = () => {
    if (Array.isArray(y.value) && y.value.length === 2) {
      const o = U(
        U(y.value[1] ? y.value[1] : Tt(y.value[0], 1))
      ), [M, H] = [Me(y.value[0]), fe(y.value[0])], [be, Te] = [Me(y.value[1]), fe(y.value[1])];
      (M !== be || M === be && H !== Te) && w.value.solo && v(1, Me(o), fe(o));
    } else y.value && !Array.isArray(y.value) && (v(0, Me(y.value), fe(y.value)), D(U()));
  }, ge = () => {
    e.startDate && (v(0, Me(U(e.startDate)), fe(U(e.startDate))), w.value.count && me(0));
  }, ce = (o, M) => {
    if (e.monthChangeOnScroll) {
      const H = (/* @__PURE__ */ new Date()).getTime() - f.value.getTime(), be = Math.abs(o.deltaY);
      let Te = 500;
      be > 1 && (Te = 100), be > 100 && (Te = 0), H > Te && (f.value = /* @__PURE__ */ new Date(), ae(e.monthChangeOnScroll !== "inverse" ? -o.deltaY : o.deltaY, M));
    }
  }, Se = (o, M, H = !1) => {
    e.monthChangeOnArrows && e.vertical === H && l(o, M);
  }, l = (o, M) => {
    ae(o === "right" ? -1 : 1, M);
  }, _ = (o) => {
    if (N.value.markers)
      return da(o.value, N.value.markers);
  }, ne = (o, M) => {
    switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
      case "prepend":
        return [!0, !1];
      case "center":
        return [o == 0, !0];
      case "fair":
        return [o == 0 || M > o, !0];
      case "append":
        return [!1, !1];
      default:
        return [!1, !1];
    }
  }, X = (o, M, H, be) => {
    if (e.sixWeeks && o.length < 6) {
      const Te = 6 - o.length, xe = (M.getDay() + 7 - be) % 7, aa = 6 - (H.getDay() + 7 - be) % 7, [Ht, $a] = ne(xe, aa);
      for (let $t = 1; $t <= Te; $t++)
        if ($a ? !!($t % 2) == Ht : Ht) {
          const na = o[0].days[0], Aa = se(At(na.value, -7), Me(M));
          o.unshift({ days: Aa });
        } else {
          const na = o[o.length - 1], Aa = na.days[na.days.length - 1], Gn = se(At(Aa.value, 1), Me(M));
          o.push({ days: Gn });
        }
    }
    return o;
  }, se = (o, M) => {
    const H = U(o), be = [];
    for (let Te = 0; Te < 7; Te++) {
      const xe = At(H, Te), zt = Me(xe) !== M;
      be.push({
        text: e.hideOffsetDates && zt ? "" : xe.getDate(),
        value: xe,
        current: !zt,
        classData: {}
      });
    }
    return be;
  }, he = (o, M) => {
    const H = [], be = new Date(M, o), Te = new Date(M, o + 1, 0), xe = e.weekStart, zt = Ha(be, { weekStartsOn: xe }), aa = (Ht) => {
      const $a = se(Ht, o);
      if (H.push({ days: $a }), !H[H.length - 1].days.some(
        ($t) => $e(Xe($t.value), Xe(Te))
      )) {
        const $t = At(Ht, 7);
        aa($t);
      }
    };
    return aa(zt), X(H, be, Te, xe);
  }, b = (o) => {
    const M = kt(U(o.value), T.hours, T.minutes, ea());
    t("date-update", M), O.value.enabled ? Za(M, y, O.value.limit) : y.value = M, a(), at().then(() => {
      h();
    });
  }, L = (o) => C.value.noDisabledRange ? Bn(n.value[0], o).some((H) => K(H)) : !1, pe = () => {
    n.value = y.value ? y.value.slice() : [], n.value.length === 2 && !(C.value.fixedStart || C.value.fixedEnd) && (n.value = []);
  }, Ee = (o, M) => {
    const H = [
      U(o.value),
      At(U(o.value), +C.value.autoRange)
    ];
    oe(H) ? (M && it(o.value), n.value = H) : t("invalid-date", o.value);
  }, it = (o) => {
    const M = Me(U(o)), H = fe(U(o));
    if (v(0, M, H), w.value.count > 0)
      for (let be = 1; be < w.value.count; be++) {
        const Te = Pl(
          Pe(U(o), { year: I.value(be - 1), month: p.value(be - 1) })
        );
        v(be, Te.month, Te.year);
      }
  }, ie = (o) => {
    if (L(o.value) || !q(o.value, y.value, C.value.fixedStart ? 0 : 1))
      return t("invalid-date", o.value);
    n.value = Hn(U(o.value), y, t, C);
  }, ft = (o) => {
    d.value[0] && t(
      "range-hovering",
      [
        d.value[0],
        o,
        !_e(U(o.value), U(d.value[0]))
      ]
    );
  }, Fe = (o, M) => {
    if (pe(), C.value.autoRange) return Ee(o, M);
    if (C.value.fixedStart || C.value.fixedEnd) return ie(o);
    n.value[0] ? q(U(o.value), y.value) && !L(o.value) ? (_e(U(o.value), U(n.value[0])) ? (n.value.unshift(U(o.value)), t("range-end", n.value[0])) : (n.value[1] = U(o.value), t("range-end", n.value[1])), d.value = []) : (e.autoApply && t("auto-apply-invalid", o.value), t("invalid-date", o.value)) : (n.value[0] = U(o.value), t("range-start", n.value[0]), d.value[0] = n.value[0]);
  }, ea = (o = !0) => e.enableSeconds ? Array.isArray(T.seconds) ? o ? T.seconds[0] : T.seconds[1] : T.seconds : 0, Lt = (o) => {
    n.value[o] = kt(
      n.value[o],
      T.hours[o],
      T.minutes[o],
      ea(o !== 1)
    );
  }, ta = () => {
    var o, M;
    n.value[0] && n.value[1] && +((o = n.value) == null ? void 0 : o[0]) > +((M = n.value) == null ? void 0 : M[1]) && (n.value.reverse(), t("range-start", n.value[0]), t("range-end", n.value[1]));
  }, ya = () => {
    n.value.length && (n.value[0] && !n.value[1] ? Lt(0) : (Lt(0), Lt(1), a()), ta(), y.value = n.value.slice(), pa(n.value, t, e.autoApply, e.modelAuto));
  }, ha = (o, M = !1) => {
    if (K(o.value) || !o.current && e.hideOffsetDates) return t("invalid-date", o.value);
    if (g.value = JSON.parse(JSON.stringify(o)), !C.value.enabled) return b(o);
    pn(T.hours) && pn(T.minutes) && !O.value.enabled && (Fe(o, M), ya());
  }, ba = (o, M) => {
    var be;
    v(o, M.month, M.year, !0), w.value.count && !w.value.solo && me(o), t("update-month-year", { instance: o, month: M.month, year: M.year }), r(w.value.solo ? o : void 0);
    const H = (be = e.flow) != null && be.length ? e.flow[e.flowStep] : void 0;
    !M.fromNav && (H === je.month || H === je.year) && a();
  }, ka = (o, M) => {
    zn({
      value: o,
      modelValue: y,
      range: C.value.enabled,
      timezone: M ? void 0 : c.value.timezone
    }), j(), e.multiCalendars && at().then(() => le(!0));
  }, wa = () => {
    const o = Ga(U(), c.value);
    !C.value.enabled && !O.value.enabled ? y.value = o : y.value && Array.isArray(y.value) && y.value[0] ? O.value.enabled ? y.value = [...y.value, o] : y.value = _e(o, y.value[0]) ? [o, y.value[0]] : [y.value[0], o] : y.value = [o], j();
  }, Da = () => {
    if (Array.isArray(y.value))
      if (O.value.enabled) {
        const o = Ma();
        y.value[y.value.length - 1] = x(o);
      } else
        y.value = y.value.map((o, M) => o && x(o, M));
    else
      y.value = x(y.value);
    t("time-update");
  }, Ma = () => Array.isArray(y.value) && y.value.length ? y.value[y.value.length - 1] : null;
  return {
    calendars: m,
    modelValue: y,
    month: p,
    year: I,
    time: T,
    disabledTimesConfig: ve,
    today: $,
    validateTime: de,
    getCalendarDays: he,
    getMarker: _,
    handleScroll: ce,
    handleSwipe: l,
    handleArrow: Se,
    selectDate: ha,
    handleDateSelection: ft,
    updateMonthYear: ba,
    presetDate: ka,
    selectCurrentDate: wa,
    updateTime: (o, M = !0, H = !1) => {
      R(o, M, H, Da);
    },
    assignMonthAndYear: D
  };
}, Hr = { key: 0 }, Ur = /* @__PURE__ */ Ue({
  __name: "DatePicker",
  props: {
    ...ut
  },
  emits: [
    "tooltip-open",
    "tooltip-close",
    "mount",
    "update:internal-model-value",
    "update-flow-step",
    "reset-flow",
    "auto-apply",
    "focus-menu",
    "select-date",
    "range-start",
    "range-hovering",
    "range-end",
    "hover-day",
    "invalid-fixed-range",
    "time-update",
    "am-pm-change",
    "time-picker-open",
    "time-picker-close",
    "recalculate-position",
    "update-month-year",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      calendars: d,
      month: f,
      year: g,
      modelValue: Y,
      time: y,
      disabledTimesConfig: m,
      today: T,
      validateTime: $,
      getCalendarDays: w,
      getMarker: te,
      handleArrow: C,
      handleScroll: W,
      handleDateSelection: c,
      handleSwipe: N,
      selectDate: O,
      updateMonthYear: z,
      presetDate: K,
      selectCurrentDate: oe,
      updateTime: q,
      assignMonthAndYear: R
    } = zr(n, a, D, Z), x = Rt(), { setHoverDate: B, getDayClassData: G, clearHoverDate: de } = ro(Y, n), { defaultedMultiCalendars: ve } = Be(n), p = (l) => {
      l && (a("hover-day", l), B(l), c(l));
    }, I = ee([]), re = ee([]), v = ee(null), j = et(x, "calendar"), S = et(x, "monthYear"), h = et(x, "timePicker"), le = (l) => {
      n.shadow || a("mount", l);
    };
    lt(
      d,
      () => {
        n.shadow || setTimeout(() => {
          a("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    ), lt(
      ve,
      (l, _) => {
        l.count - _.count > 0 && R();
      },
      { deep: !0 }
    );
    const E = Q(() => (l) => w(f.value(l), g.value(l)).map((_) => ({
      ..._,
      days: _.days.map((ne) => (ne.marker = te(ne), ne.classData = G(ne), ne))
    })));
    function D(l) {
      var _;
      l || l === 0 ? (_ = re.value[l]) == null || _.triggerTransition(f.value(l), g.value(l)) : re.value.forEach((ne, X) => ne.triggerTransition(f.value(X), g.value(X)));
    }
    function Z() {
      a("update-flow-step");
    }
    const u = (l, _ = !1) => {
      O(l, _), n.spaceConfirm && a("select-date");
    }, k = (l, _, ne = 0) => {
      var X;
      (X = I.value[ne]) == null || X.toggleMonthPicker(l, _);
    }, F = (l, _, ne = 0) => {
      var X;
      (X = I.value[ne]) == null || X.toggleYearPicker(l, _);
    }, i = (l, _, ne) => {
      var X;
      (X = v.value) == null || X.toggleTimePicker(l, _, ne);
    }, ae = (l, _) => {
      var ne;
      if (!n.range) {
        const X = Y.value ? Y.value : T, se = _ ? new Date(_) : X, he = l ? Ha(se, { weekStartsOn: 1 }) : kn(se, { weekStartsOn: 1 });
        O({
          value: he,
          current: Me(se) === f.value(0),
          text: "",
          classData: {}
        }), (ne = document.getElementById(En(he))) == null || ne.focus();
      }
    }, me = (l) => {
      var _;
      (_ = I.value[0]) == null || _.handleMonthYearChange(l, !0);
    }, P = (l) => {
      z(0, { month: f.value(0), year: g.value(0) + (l ? 1 : -1), fromNav: !0 });
    }, ge = (l, _) => {
      l === je.time && a(`time-picker-${_ ? "open" : "close"}`), a("overlay-toggle", { open: _, overlay: l });
    }, ce = (l) => {
      a("overlay-toggle", { open: !1, overlay: l }), a("focus-menu");
    };
    return t({
      clearHoverDate: de,
      presetDate: K,
      selectCurrentDate: oe,
      toggleMonthPicker: k,
      toggleYearPicker: F,
      toggleTimePicker: i,
      handleArrow: C,
      updateMonthYear: z,
      getSidebarProps: () => ({
        modelValue: Y,
        month: f,
        year: g,
        time: y,
        updateTime: q,
        updateMonthYear: z,
        selectDate: O,
        presetDate: K
      }),
      changeMonth: me,
      changeYear: P,
      selectWeekDate: ae
    }), (l, _) => (A(), V(ke, null, [
      tt(ma, {
        "multi-calendars": s(ve).count,
        collapse: l.collapse,
        "is-mobile": l.isMobile
      }, {
        default: we(({ instance: ne, index: X }) => [
          l.disableMonthYearSelect ? J("", !0) : (A(), Ae(Br, He({
            key: 0,
            ref: (se) => {
              se && (I.value[X] = se);
            },
            months: s(Tn)(l.formatLocale, l.locale, l.monthNameFormat),
            years: s(Qa)(l.yearRange, l.locale, l.reverseYears),
            month: s(f)(ne),
            year: s(g)(ne),
            instance: ne
          }, l.$props, {
            onMount: _[0] || (_[0] = (se) => le(s(St).header)),
            onResetFlow: _[1] || (_[1] = (se) => l.$emit("reset-flow")),
            onUpdateMonthYear: (se) => s(z)(ne, se),
            onOverlayClosed: ce,
            onOverlayOpened: _[2] || (_[2] = (se) => l.$emit("overlay-toggle", { open: !0, overlay: se }))
          }), Ge({ _: 2 }, [
            Oe(s(S), (se, he) => ({
              name: se,
              fn: we((b) => [
                ue(l.$slots, se, ze(Je(b)))
              ])
            }))
          ]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])),
          tt(Lr, He({
            ref: (se) => {
              se && (re.value[X] = se);
            },
            "mapped-dates": E.value(ne),
            month: s(f)(ne),
            year: s(g)(ne),
            instance: ne
          }, l.$props, {
            onSelectDate: (se) => s(O)(se, ne !== 1),
            onHandleSpace: (se) => u(se, ne !== 1),
            onSetHoverDate: _[3] || (_[3] = (se) => p(se)),
            onHandleScroll: (se) => s(W)(se, ne),
            onHandleSwipe: (se) => s(N)(se, ne),
            onMount: _[4] || (_[4] = (se) => le(s(St).calendar)),
            onResetFlow: _[5] || (_[5] = (se) => l.$emit("reset-flow")),
            onTooltipOpen: _[6] || (_[6] = (se) => l.$emit("tooltip-open", se)),
            onTooltipClose: _[7] || (_[7] = (se) => l.$emit("tooltip-close", se))
          }), Ge({ _: 2 }, [
            Oe(s(j), (se, he) => ({
              name: se,
              fn: we((b) => [
                ue(l.$slots, se, ze(Je({ ...b })))
              ])
            }))
          ]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
        ]),
        _: 3
      }, 8, ["multi-calendars", "collapse", "is-mobile"]),
      l.enableTimePicker ? (A(), V("div", Hr, [
        l.$slots["time-picker"] ? ue(l.$slots, "time-picker", ze(He({ key: 0 }, { time: s(y), updateTime: s(q) }))) : (A(), Ae(Wn, He({
          key: 1,
          ref_key: "timePickerRef",
          ref: v
        }, l.$props, {
          hours: s(y).hours,
          minutes: s(y).minutes,
          seconds: s(y).seconds,
          "internal-model-value": l.internalModelValue,
          "disabled-times-config": s(m),
          "validate-time": s($),
          onMount: _[8] || (_[8] = (ne) => le(s(St).timePicker)),
          "onUpdate:hours": _[9] || (_[9] = (ne) => s(q)(ne)),
          "onUpdate:minutes": _[10] || (_[10] = (ne) => s(q)(ne, !1)),
          "onUpdate:seconds": _[11] || (_[11] = (ne) => s(q)(ne, !1, !0)),
          onResetFlow: _[12] || (_[12] = (ne) => l.$emit("reset-flow")),
          onOverlayClosed: _[13] || (_[13] = (ne) => ge(ne, !1)),
          onOverlayOpened: _[14] || (_[14] = (ne) => ge(ne, !0)),
          onAmPmChange: _[15] || (_[15] = (ne) => l.$emit("am-pm-change", ne))
        }), Ge({ _: 2 }, [
          Oe(s(h), (ne, X) => ({
            name: ne,
            fn: we((se) => [
              ue(l.$slots, ne, ze(Je(se)))
            ])
          }))
        ]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))
      ])) : J("", !0)
    ], 64));
  }
}), Wr = (e, t) => {
  const r = ee(), {
    defaultedMultiCalendars: a,
    defaultedConfig: n,
    defaultedHighlight: d,
    defaultedRange: f,
    propDates: g,
    defaultedFilters: Y,
    defaultedMultiDates: y
  } = Be(e), { modelValue: m, year: T, month: $, calendars: w } = xt(e, t), { isDisabled: te } = Mt(e), { selectYear: C, groupedYears: W, showYearPicker: c, isDisabled: N, toggleYearPicker: O, handleYearSelect: z, handleYear: K } = Un({
    modelValue: m,
    multiCalendars: a,
    range: f,
    highlight: d,
    calendars: w,
    propDates: g,
    month: $,
    year: T,
    filters: Y,
    props: e,
    emit: t
  }), oe = (v, j) => [v, j].map((S) => ct(S, "MMMM", { locale: e.formatLocale })).join("-"), q = Q(() => (v) => m.value ? Array.isArray(m.value) ? m.value.some((j) => nn(v, j)) : nn(m.value, v) : !1), R = (v) => {
    if (f.value.enabled) {
      if (Array.isArray(m.value)) {
        const j = $e(v, m.value[0]) || $e(v, m.value[1]);
        return fa(m.value, r.value, v) && !j;
      }
      return !1;
    }
    return !1;
  }, x = (v, j) => v.quarter === rn(j) && v.year === fe(j), B = (v) => typeof d.value == "function" ? d.value({ quarter: rn(v), year: fe(v) }) : !!d.value.quarters.find((j) => x(j, v)), G = Q(() => (v) => {
    const j = Pe(/* @__PURE__ */ new Date(), { year: T.value(v) });
    return cl({
      start: ia(j),
      end: Mn(j)
    }).map((S) => {
      const h = fl(S), le = ln(S), E = te(S), D = R(h), Z = B(h);
      return {
        text: oe(h, le),
        value: h,
        active: q.value(h),
        highlighted: Z,
        disabled: E,
        isBetween: D
      };
    });
  }), de = (v) => {
    Za(v, m, y.value.limit), t("auto-apply", !0);
  }, ve = (v) => {
    m.value = xa(m, v, t), pa(m.value, t, e.autoApply, e.modelAuto);
  }, p = (v) => {
    m.value = v, t("auto-apply");
  };
  return {
    defaultedConfig: n,
    defaultedMultiCalendars: a,
    groupedYears: W,
    year: T,
    isDisabled: N,
    quarters: G,
    showYearPicker: c,
    modelValue: m,
    setHoverDate: (v) => {
      r.value = v;
    },
    selectYear: C,
    selectQuarter: (v, j, S) => {
      if (!S)
        return w.value[j].month = Me(ln(v)), y.value.enabled ? de(v) : f.value.enabled ? ve(v) : p(v);
    },
    toggleYearPicker: O,
    handleYearSelect: z,
    handleYear: K
  };
}, Vr = { class: "dp--quarter-items" }, jr = ["data-test-id", "disabled", "onClick", "onMouseover"], Kr = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "QuarterPicker",
  props: {
    ...ut
  },
  emits: [
    "update:internal-model-value",
    "reset-flow",
    "overlay-closed",
    "auto-apply",
    "range-start",
    "range-hovering",
    "range-end",
    "overlay-toggle",
    "update-month-year"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, d = Rt(), f = et(d, "yearMode"), {
      defaultedMultiCalendars: g,
      defaultedConfig: Y,
      groupedYears: y,
      year: m,
      isDisabled: T,
      quarters: $,
      modelValue: w,
      showYearPicker: te,
      setHoverDate: C,
      selectQuarter: W,
      toggleYearPicker: c,
      handleYearSelect: N,
      handleYear: O
    } = Wr(n, a);
    return t({ getSidebarProps: () => ({
      modelValue: w,
      year: m,
      selectQuarter: W,
      handleYearSelect: N,
      handleYear: O
    }) }), (K, oe) => (A(), Ae(ma, {
      "multi-calendars": s(g).count,
      collapse: K.collapse,
      stretch: "",
      "is-mobile": K.isMobile
    }, {
      default: we(({ instance: q }) => [
        ye("div", {
          class: "dp-quarter-picker-wrap",
          style: nt({ minHeight: `${s(Y).modeHeight}px` })
        }, [
          K.$slots["top-extra"] ? ue(K.$slots, "top-extra", {
            key: 0,
            value: K.internalModelValue
          }) : J("", !0),
          ye("div", null, [
            tt(Ln, He(K.$props, {
              items: s(y)(q),
              instance: q,
              "show-year-picker": s(te)[q],
              year: s(m)(q),
              "is-disabled": (R) => s(T)(q, R),
              onHandleYear: (R) => s(O)(q, R),
              onYearSelect: (R) => s(N)(R, q),
              onToggleYearPicker: (R) => s(c)(q, R == null ? void 0 : R.flow, R == null ? void 0 : R.show)
            }), Ge({ _: 2 }, [
              Oe(s(f), (R, x) => ({
                name: R,
                fn: we((B) => [
                  ue(K.$slots, R, ze(Je(B)))
                ])
              }))
            ]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])
          ]),
          ye("div", Vr, [
            (A(!0), V(ke, null, Oe(s($)(q), (R, x) => (A(), V("div", { key: x }, [
              ye("button", {
                type: "button",
                class: De(["dp--qr-btn", {
                  "dp--qr-btn-active": R.active,
                  "dp--qr-btn-between": R.isBetween,
                  "dp--qr-btn-disabled": R.disabled,
                  "dp--highlighted": R.highlighted
                }]),
                "data-test-id": R.value,
                disabled: R.disabled,
                onClick: (B) => s(W)(R.value, q, R.disabled),
                onMouseover: (B) => s(C)(R.value)
              }, [
                K.$slots.quarter ? ue(K.$slots, "quarter", {
                  key: 0,
                  value: R.value,
                  text: R.text
                }) : (A(), V(ke, { key: 1 }, [
                  pt(Ke(R.text), 1)
                ], 64))
              ], 42, jr)
            ]))), 128))
          ])
        ], 4)
      ]),
      _: 3
    }, 8, ["multi-calendars", "collapse", "is-mobile"]));
  }
}), jn = (e, t) => {
  const r = ee(0);
  We(() => {
    a(), window.addEventListener("resize", a, { passive: !0 });
  }), Xt(() => {
    window.removeEventListener("resize", a);
  });
  const a = () => {
    r.value = window.document.documentElement.clientWidth;
  };
  return {
    isMobile: Q(
      () => r.value <= e.value.mobileBreakpoint && !t ? !0 : void 0
    )
  };
}, Gr = ["id", "tabindex", "role", "aria-label"], Qr = {
  key: 0,
  class: "dp--menu-load-container"
}, qr = {
  key: 1,
  class: "dp--menu-header"
}, Xr = ["data-dp-mobile"], Jr = {
  key: 0,
  class: "dp__sidebar_left"
}, Zr = ["data-dp-mobile"], xr = ["data-test-id", "data-dp-mobile", "onClick", "onKeydown"], eo = {
  key: 2,
  class: "dp__sidebar_right"
}, to = {
  key: 3,
  class: "dp__action_extra"
}, gn = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerMenu",
  props: {
    ...va,
    shadow: { type: Boolean, default: !1 },
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    noOverlayFocus: { type: Boolean, default: !1 },
    collapse: { type: Boolean, default: !1 },
    getInputRect: { type: Function, default: () => ({}) },
    isTextInputDate: { type: Boolean, default: !1 }
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "range-hovering",
    "hover-day",
    "range-end",
    "auto-apply-invalid",
    "date-update",
    "invalid-date",
    "overlay-toggle",
    "menu-blur"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, d = ee(null), f = Q(() => {
      const { openOnTop: b, ...L } = n;
      return {
        ...L,
        isMobile: C.value,
        flowStep: G.value,
        menuWrapRef: d.value
      };
    }), { setMenuFocused: g, setShiftKey: Y, control: y } = Fn(), m = Rt(), { defaultedTextInput: T, defaultedInline: $, defaultedConfig: w, defaultedUI: te } = Be(n), { isMobile: C } = jn(w, n.shadow), W = ee(null), c = ee(0), N = ee(null), O = ee(!1), z = ee(null), K = ee(!1);
    We(() => {
      if (!n.shadow) {
        O.value = !0, oe(), window.addEventListener("resize", oe);
        const b = Le(d);
        if (b && !T.value.enabled && !$.value.enabled && (g(!0), j()), b) {
          const L = (pe) => {
            K.value = !0, w.value.allowPreventDefault && pe.preventDefault(), bt(pe, w.value, !0);
          };
          b.addEventListener("pointerdown", L), b.addEventListener("mousedown", L);
        }
      }
      document.addEventListener("mousedown", he);
    }), Xt(() => {
      window.removeEventListener("resize", oe), document.addEventListener("mousedown", he);
    });
    const oe = () => {
      const b = Le(N);
      b && (c.value = b.getBoundingClientRect().width);
    }, { arrowRight: q, arrowLeft: R, arrowDown: x, arrowUp: B } = Dt(), { flowStep: G, updateFlowStep: de, childMount: ve, resetFlow: p, handleFlow: I } = oo(n, a, z), re = Q(() => n.monthPicker ? dr : n.yearPicker ? fr : n.timePicker ? Tr : n.quarterPicker ? Kr : Ur), v = Q(() => {
      var pe;
      if (w.value.arrowLeft) return w.value.arrowLeft;
      const b = (pe = d.value) == null ? void 0 : pe.getBoundingClientRect(), L = n.getInputRect();
      return (L == null ? void 0 : L.width) < (c == null ? void 0 : c.value) && (L == null ? void 0 : L.left) <= ((b == null ? void 0 : b.left) ?? 0) ? `${(L == null ? void 0 : L.width) / 2}px` : (L == null ? void 0 : L.right) >= ((b == null ? void 0 : b.right) ?? 0) && (L == null ? void 0 : L.width) < (c == null ? void 0 : c.value) ? `${(c == null ? void 0 : c.value) - (L == null ? void 0 : L.width) / 2}px` : "50%";
    }), j = () => {
      const b = Le(d);
      b && b.focus({ preventScroll: !0 });
    }, S = Q(() => {
      var b;
      return ((b = z.value) == null ? void 0 : b.getSidebarProps()) || {};
    }), h = () => {
      n.openOnTop && a("recalculate-position");
    }, le = et(m, "action"), E = Q(() => n.monthPicker || n.yearPicker ? et(m, "monthYear") : n.timePicker ? et(m, "timePicker") : et(m, "shared")), D = Q(() => n.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), Z = Q(() => ({
      dp__menu_disabled: n.disabled,
      dp__menu_readonly: n.readonly,
      "dp-menu-loading": n.loading
    })), u = Q(
      () => ({
        dp__menu: !0,
        dp__menu_index: !$.value.enabled,
        dp__relative: $.value.enabled,
        ...te.value.menu ?? {}
      })
    ), k = (b) => {
      bt(b, w.value, !0);
    }, F = () => {
      n.escClose && a("close-picker");
    }, i = (b) => {
      if (n.arrowNavigation) {
        if (b === Qe.up) return B();
        if (b === Qe.down) return x();
        if (b === Qe.left) return R();
        if (b === Qe.right) return q();
      } else b === Qe.left || b === Qe.up ? ce("handleArrow", Qe.left, 0, b === Qe.up) : ce("handleArrow", Qe.right, 0, b === Qe.down);
    }, ae = (b) => {
      Y(b.shiftKey), !n.disableMonthYearSelect && b.code === Ce.tab && b.target.classList.contains("dp__menu") && y.value.shiftKeyInMenu && (b.preventDefault(), bt(b, w.value, !0), a("close-picker"));
    }, me = () => {
      j(), a("time-picker-close");
    }, P = (b) => {
      var L, pe, Ee;
      (L = z.value) == null || L.toggleTimePicker(!1, !1), (pe = z.value) == null || pe.toggleMonthPicker(!1, !1, b), (Ee = z.value) == null || Ee.toggleYearPicker(!1, !1, b);
    }, ge = (b, L = 0) => {
      var pe, Ee, it;
      return b === "month" ? (pe = z.value) == null ? void 0 : pe.toggleMonthPicker(!1, !0, L) : b === "year" ? (Ee = z.value) == null ? void 0 : Ee.toggleYearPicker(!1, !0, L) : b === "time" ? (it = z.value) == null ? void 0 : it.toggleTimePicker(!0, !1) : P(L);
    }, ce = (b, ...L) => {
      var pe, Ee;
      (pe = z.value) != null && pe[b] && ((Ee = z.value) == null || Ee[b](...L));
    }, Se = () => {
      ce("selectCurrentDate");
    }, l = (b, L) => {
      ce("presetDate", b, L);
    }, _ = () => {
      ce("clearHoverDate");
    }, ne = (b, L) => {
      ce("updateMonthYear", b, L);
    }, X = (b, L) => {
      b.preventDefault(), i(L);
    }, se = (b) => {
      var L, pe, Ee;
      if (ae(b), b.key === Ce.home || b.key === Ce.end)
        return ce(
          "selectWeekDate",
          b.key === Ce.home,
          b.target.getAttribute("id")
        );
      switch ((b.key === Ce.pageUp || b.key === Ce.pageDown) && (b.shiftKey ? (ce("changeYear", b.key === Ce.pageUp), (L = La(d.value, "overlay-year")) == null || L.focus()) : (ce("changeMonth", b.key === Ce.pageUp), (pe = La(d.value, b.key === Ce.pageUp ? "action-prev" : "action-next")) == null || pe.focus()), b.target.getAttribute("id") && ((Ee = d.value) == null || Ee.focus({ preventScroll: !0 }))), b.key) {
        case Ce.esc:
          return F();
        case Ce.arrowLeft:
          return X(b, Qe.left);
        case Ce.arrowRight:
          return X(b, Qe.right);
        case Ce.arrowUp:
          return X(b, Qe.up);
        case Ce.arrowDown:
          return X(b, Qe.down);
        default:
          return;
      }
    }, he = (b) => {
      var L;
      $.value.enabled && !$.value.input && !((L = d.value) != null && L.contains(b.target)) && K.value && (K.value = !1, a("menu-blur"));
    };
    return t({
      updateMonthYear: ne,
      switchView: ge,
      handleFlow: I
    }), (b, L) => {
      var pe, Ee, it;
      return A(), V("div", {
        id: b.uid ? `dp-menu-${b.uid}` : void 0,
        ref_key: "dpMenuRef",
        ref: d,
        tabindex: s($).enabled ? void 0 : "0",
        role: s($).enabled ? void 0 : "dialog",
        "aria-label": (pe = b.ariaLabels) == null ? void 0 : pe.menu,
        class: De(u.value),
        style: nt({ "--dp-arrow-left": v.value }),
        onMouseleave: _,
        onClick: k,
        onKeydown: se
      }, [
        (b.disabled || b.readonly) && s($).enabled || b.loading ? (A(), V("div", {
          key: 0,
          class: De(Z.value)
        }, [
          b.loading ? (A(), V("div", Qr, L[21] || (L[21] = [
            ye("span", { class: "dp--menu-loader" }, null, -1)
          ]))) : J("", !0)
        ], 2)) : J("", !0),
        b.$slots["menu-header"] ? (A(), V("div", qr, [
          ue(b.$slots, "menu-header")
        ])) : J("", !0),
        !s($).enabled && !b.teleportCenter ? (A(), V("div", {
          key: 2,
          class: De(D.value)
        }, null, 2)) : J("", !0),
        ye("div", {
          ref_key: "innerMenuRef",
          ref: N,
          class: De({
            dp__menu_content_wrapper: ((Ee = b.presetDates) == null ? void 0 : Ee.length) || !!b.$slots["left-sidebar"] || !!b.$slots["right-sidebar"],
            "dp--menu-content-wrapper-collapsed": e.collapse && (((it = b.presetDates) == null ? void 0 : it.length) || !!b.$slots["left-sidebar"] || !!b.$slots["right-sidebar"])
          }),
          "data-dp-mobile": s(C),
          style: nt({ "--dp-menu-width": `${c.value}px` })
        }, [
          b.$slots["left-sidebar"] ? (A(), V("div", Jr, [
            ue(b.$slots, "left-sidebar", ze(Je(S.value)))
          ])) : J("", !0),
          b.presetDates.length ? (A(), V("div", {
            key: 1,
            class: De({ "dp--preset-dates-collapsed": e.collapse, "dp--preset-dates": !0 }),
            "data-dp-mobile": s(C)
          }, [
            (A(!0), V(ke, null, Oe(b.presetDates, (ie, ft) => (A(), V(ke, { key: ft }, [
              ie.slot ? ue(b.$slots, ie.slot, {
                key: 0,
                presetDate: l,
                label: ie.label,
                value: ie.value
              }) : (A(), V("button", {
                key: 1,
                type: "button",
                style: nt(ie.style || {}),
                class: De(["dp__btn dp--preset-range", { "dp--preset-range-collapsed": e.collapse }]),
                "data-test-id": ie.testId ?? void 0,
                "data-dp-mobile": s(C),
                onClick: jt((Fe) => l(ie.value, ie.noTz), ["prevent"]),
                onKeydown: (Fe) => s(qe)(Fe, () => l(ie.value, ie.noTz), !0)
              }, Ke(ie.label), 47, xr))
            ], 64))), 128))
          ], 10, Zr)) : J("", !0),
          ye("div", {
            ref_key: "calendarWrapperRef",
            ref: W,
            class: "dp__instance_calendar",
            role: "document"
          }, [
            (A(), Ae(ca(re.value), He({
              ref_key: "dynCmpRef",
              ref: z
            }, f.value, {
              "flow-step": s(G),
              onMount: s(ve),
              onUpdateFlowStep: s(de),
              onResetFlow: s(p),
              onFocusMenu: j,
              onSelectDate: L[0] || (L[0] = (ie) => b.$emit("select-date")),
              onDateUpdate: L[1] || (L[1] = (ie) => b.$emit("date-update", ie)),
              onTooltipOpen: L[2] || (L[2] = (ie) => b.$emit("tooltip-open", ie)),
              onTooltipClose: L[3] || (L[3] = (ie) => b.$emit("tooltip-close", ie)),
              onAutoApply: L[4] || (L[4] = (ie) => b.$emit("auto-apply", ie)),
              onRangeStart: L[5] || (L[5] = (ie) => b.$emit("range-start", ie)),
              onRangeHovering: L[6] || (L[6] = (ie) => b.$emit("range-hovering", ie)),
              onRangeEnd: L[7] || (L[7] = (ie) => b.$emit("range-end", ie)),
              onHoverDay: L[8] || (L[8] = (ie) => b.$emit("hover-day", ie)),
              onInvalidFixedRange: L[9] || (L[9] = (ie) => b.$emit("invalid-fixed-range", ie)),
              onTimeUpdate: L[10] || (L[10] = (ie) => b.$emit("time-update")),
              onAmPmChange: L[11] || (L[11] = (ie) => b.$emit("am-pm-change", ie)),
              onTimePickerOpen: L[12] || (L[12] = (ie) => b.$emit("time-picker-open", ie)),
              onTimePickerClose: me,
              onRecalculatePosition: h,
              onUpdateMonthYear: L[13] || (L[13] = (ie) => b.$emit("update-month-year", ie)),
              onAutoApplyInvalid: L[14] || (L[14] = (ie) => b.$emit("auto-apply-invalid", ie)),
              onInvalidDate: L[15] || (L[15] = (ie) => b.$emit("invalid-date", ie)),
              onOverlayToggle: L[16] || (L[16] = (ie) => b.$emit("overlay-toggle", ie)),
              "onUpdate:internalModelValue": L[17] || (L[17] = (ie) => b.$emit("update:internal-model-value", ie))
            }), Ge({ _: 2 }, [
              Oe(E.value, (ie, ft) => ({
                name: ie,
                fn: we((Fe) => [
                  ue(b.$slots, ie, ze(Je({ ...Fe })))
                ])
              }))
            ]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))
          ], 512),
          b.$slots["right-sidebar"] ? (A(), V("div", eo, [
            ue(b.$slots, "right-sidebar", ze(Je(S.value)))
          ])) : J("", !0),
          b.$slots["action-extra"] ? (A(), V("div", to, [
            b.$slots["action-extra"] ? ue(b.$slots, "action-extra", {
              key: 0,
              selectCurrentDate: Se
            }) : J("", !0)
          ])) : J("", !0)
        ], 14, Xr),
        !b.autoApply || s(w).keepActionRow ? (A(), Ae(tr, He({
          key: 3,
          "menu-mount": O.value
        }, f.value, {
          "calendar-width": c.value,
          onClosePicker: L[18] || (L[18] = (ie) => b.$emit("close-picker")),
          onSelectDate: L[19] || (L[19] = (ie) => b.$emit("select-date")),
          onInvalidSelect: L[20] || (L[20] = (ie) => b.$emit("invalid-select")),
          onSelectNow: Se
        }), Ge({ _: 2 }, [
          Oe(s(le), (ie, ft) => ({
            name: ie,
            fn: we((Fe) => [
              ue(b.$slots, ie, ze(Je({ ...Fe })))
            ])
          }))
        ]), 1040, ["menu-mount", "calendar-width"])) : J("", !0)
      ], 46, Gr);
    };
  }
});
var Ot = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Ot || {});
const ao = ({
  menuRef: e,
  menuRefInner: t,
  inputRef: r,
  pickerWrapperRef: a,
  inline: n,
  emit: d,
  props: f,
  slots: g
}) => {
  const { defaultedConfig: Y } = Be(f), y = ee({}), m = ee(!1), T = ee({
    top: "0",
    left: "0"
  }), $ = ee(!1), w = Vt(f, "teleportCenter");
  lt(w, () => {
    T.value = JSON.parse(JSON.stringify({})), K();
  });
  const te = (v) => {
    if (f.teleport) {
      const j = v.getBoundingClientRect();
      return {
        left: j.left + window.scrollX,
        top: j.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, C = (v, j) => {
    T.value.left = `${v + j - y.value.width}px`;
  }, W = (v) => {
    T.value.left = `${v}px`;
  }, c = (v, j) => {
    f.position === Ot.left && W(v), f.position === Ot.right && C(v, j), f.position === Ot.center && (T.value.left = `${v + j / 2 - y.value.width / 2}px`);
  }, N = (v) => {
    const { width: j, height: S } = v.getBoundingClientRect(), { top: h, left: le } = te(v);
    return { top: +h, left: +le, width: j, height: S };
  }, O = () => {
    T.value.left = "50%", T.value.top = "50%", T.value.transform = "translate(-50%, -50%)", T.value.position = "fixed", delete T.value.opacity;
  }, z = () => {
    const v = Le(r);
    T.value = f.altPosition(v);
  }, K = (v = !0) => {
    var j;
    if (!n.value.enabled) {
      if (w.value) return O();
      if (f.altPosition !== null) return z();
      if (v) {
        const S = f.teleport ? (j = t.value) == null ? void 0 : j.$el : e.value;
        S && (y.value = S.getBoundingClientRect()), d("recalculate-position");
      }
      return de();
    }
  }, oe = ({ inputEl: v, left: j, width: S }) => {
    window.screen.width > 768 && !m.value && c(j, S), x(v);
  }, q = (v) => {
    const { top: j, left: S, height: h, width: le } = N(v);
    T.value.top = `${h + j + +f.offset}px`, $.value = !1, m.value || (T.value.left = `${S + le / 2 - y.value.width / 2}px`), oe({ inputEl: v, left: S, width: le });
  }, R = (v) => {
    const { top: j, left: S, width: h } = N(v);
    T.value.top = `${j - +f.offset - y.value.height}px`, $.value = !0, oe({ inputEl: v, left: S, width: h });
  }, x = (v) => {
    if (f.autoPosition) {
      const { left: j, width: S } = N(v), { left: h, right: le } = y.value;
      if (!m.value) {
        if (Math.abs(h) !== Math.abs(le)) {
          if (h <= 0)
            return m.value = !0, W(j);
          if (le >= document.documentElement.clientWidth)
            return m.value = !0, C(j, S);
        }
        return c(j, S);
      }
    }
  }, B = () => {
    const v = Le(r);
    if (v) {
      if (f.autoPosition === ot.top) return ot.top;
      if (f.autoPosition === ot.bottom) return ot.bottom;
      const { height: j } = y.value, { top: S, height: h } = v.getBoundingClientRect(), E = window.innerHeight - S - h, D = S;
      return j <= E ? ot.bottom : j > E && j <= D ? ot.top : E >= D ? ot.bottom : ot.top;
    }
    return ot.bottom;
  }, G = (v) => B() === ot.bottom ? q(v) : R(v), de = () => {
    const v = Le(r);
    if (v)
      return f.autoPosition ? G(v) : q(v);
  }, ve = function(v) {
    if (v) {
      const j = v.scrollHeight > v.clientHeight, h = window.getComputedStyle(v).overflowY.indexOf("hidden") !== -1;
      return j && !h;
    }
    return !0;
  }, p = function(v) {
    return !v || v === document.body || v.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : ve(v) ? v : p(
      v.assignedSlot && Y.value.shadowDom ? v.assignedSlot.parentNode : v.parentNode
    );
  }, I = (v) => {
    if (v)
      switch (f.position) {
        case Ot.left:
          return { left: 0, transform: "translateX(0)" };
        case Ot.right:
          return { left: `${v.width}px`, transform: "translateX(-100%)" };
        default:
          return { left: `${v.width / 2}px`, transform: "translateX(-50%)" };
      }
    return {};
  };
  return {
    openOnTop: $,
    menuStyle: T,
    xCorrect: m,
    setMenuPosition: K,
    getScrollableParent: p,
    shadowRender: (v, j) => {
      var u, k, F;
      const S = document.createElement("div"), h = (u = Le(r)) == null ? void 0 : u.getBoundingClientRect();
      S.setAttribute("id", "dp--temp-container");
      const le = (k = a.value) != null && k.clientWidth ? a.value : document.body;
      le.append(S);
      const E = I(h), D = Y.value.shadowDom ? Object.keys(g).filter(
        (i) => ["right-sidebar", "left-sidebar", "top-extra", "action-extra"].includes(i)
      ) : Object.keys(g), Z = Jn(
        v,
        {
          ...j,
          shadow: !0,
          style: { opacity: 0, position: "absolute", ...E }
        },
        Object.fromEntries(D.map((i) => [i, g[i]]))
      );
      tn(Z, S), y.value = (F = Z.el) == null ? void 0 : F.getBoundingClientRect(), tn(null, S), le.removeChild(S);
    }
  };
}, yt = [
  { name: "clock-icon", use: ["time", "calendar", "shared"] },
  { name: "arrow-left", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-right", use: ["month-year", "calendar", "shared", "year-mode"] },
  { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
  { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar", "shared", "year-mode"] },
  { name: "day", use: ["calendar", "shared"] },
  { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
  { name: "year-overlay-value", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "year-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay", use: ["month-year", "shared"] },
  { name: "month-overlay-header", use: ["month-year", "shared"] },
  { name: "year-overlay-header", use: ["month-year", "shared"] },
  { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "hours-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "minutes-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
  { name: "seconds-overlay-header", use: ["calendar", "time", "shared"] },
  { name: "hours", use: ["calendar", "time", "shared"] },
  { name: "minutes", use: ["calendar", "time", "shared"] },
  { name: "month", use: ["calendar", "month-year", "shared"] },
  { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
  { name: "action-buttons", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar", "shared"] },
  { name: "marker-tooltip", use: ["calendar", "shared"] },
  { name: "action-extra", use: ["menu"] },
  { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
  { name: "am-pm-button", use: ["calendar", "time", "shared"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year", "shared"] },
  { name: "time-picker", use: ["menu", "shared"] },
  { name: "action-row", use: ["action"] },
  { name: "marker", use: ["calendar", "shared"] },
  { name: "quarter", use: ["shared"] },
  { name: "top-extra", use: ["shared", "month-year"] },
  { name: "tp-inline-arrow-up", use: ["shared", "time"] },
  { name: "tp-inline-arrow-down", use: ["shared", "time"] },
  { name: "menu-header", use: ["menu"] }
], no = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], lo = {
  all: () => yt,
  monthYear: () => yt.filter((e) => e.use.includes("month-year")),
  input: () => no,
  timePicker: () => yt.filter((e) => e.use.includes("time")),
  action: () => yt.filter((e) => e.use.includes("action")),
  calendar: () => yt.filter((e) => e.use.includes("calendar")),
  menu: () => yt.filter((e) => e.use.includes("menu")),
  shared: () => yt.filter((e) => e.use.includes("shared")),
  yearMode: () => yt.filter((e) => e.use.includes("year-mode"))
}, et = (e, t, r) => {
  const a = [];
  return lo[t]().forEach((n) => {
    e[n.name] && a.push(n.name);
  }), r != null && r.length && r.forEach((n) => {
    n.slot && a.push(n.slot);
  }), a;
}, Zt = (e) => {
  const t = Q(() => (a) => e.value ? a ? e.value.open : e.value.close : ""), r = Q(() => (a) => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
  return { transitionName: t, showTransition: !!e.value, menuTransition: r };
}, xt = (e, t, r) => {
  const { defaultedRange: a, defaultedTz: n } = Be(e), d = U(Ze(U(), n.value.timezone)), f = ee([{ month: Me(d), year: fe(d) }]), g = ($) => {
    const w = {
      hours: gt(d),
      minutes: wt(d),
      seconds: 0
    };
    return a.value.enabled ? [w[$], w[$]] : w[$];
  }, Y = qt({
    hours: g("hours"),
    minutes: g("minutes"),
    seconds: g("seconds")
  });
  lt(
    a,
    ($, w) => {
      $.enabled !== w.enabled && (Y.hours = g("hours"), Y.minutes = g("minutes"), Y.seconds = g("seconds"));
    },
    { deep: !0 }
  );
  const y = Q({
    get: () => e.internalModelValue,
    set: ($) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", $);
    }
  }), m = Q(
    () => ($) => f.value[$] ? f.value[$].month : 0
  ), T = Q(
    () => ($) => f.value[$] ? f.value[$].year : 0
  );
  return lt(
    y,
    ($, w) => {
      r && JSON.stringify($ ?? {}) !== JSON.stringify(w ?? {}) && r();
    },
    { deep: !0 }
  ), {
    calendars: f,
    time: Y,
    modelValue: y,
    month: m,
    year: T,
    today: d
  };
}, ro = (e, t) => {
  const {
    defaultedMultiCalendars: r,
    defaultedMultiDates: a,
    defaultedUI: n,
    defaultedHighlight: d,
    defaultedTz: f,
    propDates: g,
    defaultedRange: Y
  } = Be(t), { isDisabled: y } = Mt(t), m = ee(null), T = ee(Ze(/* @__PURE__ */ new Date(), f.value.timezone)), $ = (u) => {
    !u.current && t.hideOffsetDates || (m.value = u.value);
  }, w = () => {
    m.value = null;
  }, te = (u) => Array.isArray(e.value) && Y.value.enabled && e.value[0] && m.value ? u ? Ie(m.value, e.value[0]) : _e(m.value, e.value[0]) : !0, C = (u, k) => {
    const F = () => e.value ? k ? e.value[0] || null : e.value[1] : null, i = e.value && Array.isArray(e.value) ? F() : null;
    return $e(U(u.value), i);
  }, W = (u) => {
    const k = Array.isArray(e.value) ? e.value[0] : null;
    return u ? !_e(m.value ?? null, k) : !0;
  }, c = (u, k = !0) => (Y.value.enabled || t.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? t.hideOffsetDates && !u.current ? !1 : $e(U(u.value), e.value[k ? 0 : 1]) : Y.value.enabled ? C(u, k) && W(k) || $e(u.value, Array.isArray(e.value) ? e.value[0] : null) && te(k) : !1, N = (u, k) => {
    if (Array.isArray(e.value) && e.value[0] && e.value.length === 1) {
      const F = $e(u.value, m.value);
      return k ? Ie(e.value[0], u.value) && F : _e(e.value[0], u.value) && F;
    }
    return !1;
  }, O = (u) => !e.value || t.hideOffsetDates && !u.current ? !1 : Y.value.enabled ? t.modelAuto && Array.isArray(e.value) ? $e(u.value, e.value[0] ? e.value[0] : T.value) : !1 : a.value.enabled && Array.isArray(e.value) ? e.value.some((k) => $e(k, u.value)) : $e(u.value, e.value ? e.value : T.value), z = (u) => {
    if (Y.value.autoRange || t.weekPicker) {
      if (m.value) {
        if (t.hideOffsetDates && !u.current) return !1;
        const k = At(m.value, +Y.value.autoRange), F = vt(U(m.value), t.weekStart);
        return t.weekPicker ? $e(F[1], U(u.value)) : $e(k, U(u.value));
      }
      return !1;
    }
    return !1;
  }, K = (u) => {
    if (Y.value.autoRange || t.weekPicker) {
      if (m.value) {
        const k = At(m.value, +Y.value.autoRange);
        if (t.hideOffsetDates && !u.current) return !1;
        const F = vt(U(m.value), t.weekStart);
        return t.weekPicker ? Ie(u.value, F[0]) && _e(u.value, F[1]) : Ie(u.value, m.value) && _e(u.value, k);
      }
      return !1;
    }
    return !1;
  }, oe = (u) => {
    if (Y.value.autoRange || t.weekPicker) {
      if (m.value) {
        if (t.hideOffsetDates && !u.current) return !1;
        const k = vt(U(m.value), t.weekStart);
        return t.weekPicker ? $e(k[0], u.value) : $e(m.value, u.value);
      }
      return !1;
    }
    return !1;
  }, q = (u) => fa(e.value, m.value, u.value), R = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, x = () => t.modelAuto ? Sn(t.internalModelValue) : !0, B = (u) => {
    if (t.weekPicker) return !1;
    const k = Y.value.enabled ? !c(u) && !c(u, !1) : !0;
    return !y(u.value) && !O(u) && !(!u.current && t.hideOffsetDates) && k;
  }, G = (u) => Y.value.enabled ? t.modelAuto ? R() && O(u) : !1 : O(u), de = (u) => d.value ? Al(u.value, g.value.highlight) : !1, ve = (u) => {
    const k = y(u.value);
    return k && (typeof d.value == "function" ? !d.value(u.value, k) : !d.value.options.highlightDisabled);
  }, p = (u) => {
    var k;
    return typeof d.value == "function" ? d.value(u.value) : (k = d.value.weekdays) == null ? void 0 : k.includes(u.value.getDay());
  }, I = (u) => (Y.value.enabled || t.weekPicker) && (!(r.value.count > 0) || u.current) && x() && !(!u.current && t.hideOffsetDates) && !O(u) ? q(u) : !1, re = (u) => {
    const { isRangeStart: k, isRangeEnd: F } = h(u), i = Y.value.enabled ? k || F : !1;
    return {
      dp__cell_offset: !u.current,
      dp__pointer: !t.disabled && !(!u.current && t.hideOffsetDates) && !y(u.value),
      dp__cell_disabled: y(u.value),
      dp__cell_highlight: !ve(u) && (de(u) || p(u)) && !G(u) && !i && !oe(u) && !(I(u) && t.weekPicker) && !F,
      dp__cell_highlight_active: !ve(u) && (de(u) || p(u)) && G(u),
      dp__today: !t.noToday && $e(u.value, T.value) && u.current,
      "dp--past": _e(u.value, T.value),
      "dp--future": Ie(u.value, T.value)
    };
  }, v = (u) => ({
    dp__active_date: G(u),
    dp__date_hover: B(u)
  }), j = (u) => {
    if (e.value && !Array.isArray(e.value)) {
      const k = vt(e.value, t.weekStart);
      return {
        ...E(u),
        dp__range_start: $e(k[0], u.value),
        dp__range_end: $e(k[1], u.value),
        dp__range_between_week: Ie(u.value, k[0]) && _e(u.value, k[1])
      };
    }
    return {
      ...E(u)
    };
  }, S = (u) => {
    if (e.value && Array.isArray(e.value)) {
      const k = vt(e.value[0], t.weekStart), F = e.value[1] ? vt(e.value[1], t.weekStart) : [];
      return {
        ...E(u),
        dp__range_start: $e(k[0], u.value) || $e(F[0], u.value),
        dp__range_end: $e(k[1], u.value) || $e(F[1], u.value),
        dp__range_between_week: Ie(u.value, k[0]) && _e(u.value, k[1]) || Ie(u.value, F[0]) && _e(u.value, F[1]),
        dp__range_between: Ie(u.value, k[1]) && _e(u.value, F[0])
      };
    }
    return {
      ...E(u)
    };
  }, h = (u) => {
    const k = r.value.count > 0 ? u.current && c(u) && x() : c(u) && x(), F = r.value.count > 0 ? u.current && c(u, !1) && x() : c(u, !1) && x();
    return { isRangeStart: k, isRangeEnd: F };
  }, le = (u) => {
    const { isRangeStart: k, isRangeEnd: F } = h(u);
    return {
      dp__range_start: k,
      dp__range_end: F,
      dp__range_between: I(u),
      dp__date_hover: $e(u.value, m.value) && !k && !F && !t.weekPicker,
      dp__date_hover_start: N(u, !0),
      dp__date_hover_end: N(u, !1)
    };
  }, E = (u) => ({
    ...le(u),
    dp__cell_auto_range: K(u),
    dp__cell_auto_range_start: oe(u),
    dp__cell_auto_range_end: z(u)
  }), D = (u) => Y.value.enabled ? Y.value.autoRange ? E(u) : t.modelAuto ? { ...v(u), ...le(u) } : t.weekPicker ? S(u) : le(u) : t.weekPicker ? j(u) : v(u);
  return {
    setHoverDate: $,
    clearHoverDate: w,
    getDayClassData: (u) => t.hideOffsetDates && !u.current ? {} : {
      ...re(u),
      ...D(u),
      [t.dayClass ? t.dayClass(u.value, t.internalModelValue) : ""]: !0,
      ...n.value.calendarCell ?? {}
    }
  };
}, Mt = (e) => {
  const { defaultedFilters: t, defaultedRange: r, propDates: a, defaultedMultiDates: n } = Be(e), d = (p) => a.value.disabledDates ? typeof a.value.disabledDates == "function" ? a.value.disabledDates(U(p)) : !!da(p, a.value.disabledDates) : !1, f = (p) => a.value.maxDate ? e.yearPicker ? fe(p) > fe(a.value.maxDate) : Ie(p, a.value.maxDate) : !1, g = (p) => a.value.minDate ? e.yearPicker ? fe(p) < fe(a.value.minDate) : _e(p, a.value.minDate) : !1, Y = (p) => {
    const I = f(p), re = g(p), v = d(p), S = t.value.months.map((Z) => +Z).includes(Me(p)), h = e.disabledWeekDays.length ? e.disabledWeekDays.some((Z) => +Z === vl(p)) : !1, le = w(p), E = fe(p), D = E < +e.yearRange[0] || E > +e.yearRange[1];
    return !(I || re || v || S || D || h || le);
  }, y = (p, I) => _e(...ht(a.value.minDate, p, I)) || $e(...ht(a.value.minDate, p, I)), m = (p, I) => Ie(...ht(a.value.maxDate, p, I)) || $e(...ht(a.value.maxDate, p, I)), T = (p, I, re) => {
    let v = !1;
    return a.value.maxDate && re && m(p, I) && (v = !0), a.value.minDate && !re && y(p, I) && (v = !0), v;
  }, $ = (p, I, re, v) => {
    let j = !1;
    return v && (a.value.minDate || a.value.maxDate) ? a.value.minDate && a.value.maxDate ? j = T(p, I, re) : (a.value.minDate && y(p, I) || a.value.maxDate && m(p, I)) && (j = !0) : j = !0, j;
  }, w = (p) => Array.isArray(a.value.allowedDates) && !a.value.allowedDates.length ? !0 : a.value.allowedDates ? !da(p, a.value.allowedDates) : !1, te = (p) => !Y(p), C = (p) => r.value.noDisabledRange ? !yn({ start: p[0], end: p[1] }).some((re) => te(re)) : !0, W = (p) => {
    if (p) {
      const I = fe(p);
      return I >= +e.yearRange[0] && I <= e.yearRange[1];
    }
    return !0;
  }, c = (p, I) => !!(Array.isArray(p) && p[I] && (r.value.maxRange || r.value.minRange) && W(p[I])), N = (p, I, re = 0) => {
    if (c(I, re) && W(p)) {
      const v = ml(p, I[re]), j = Bn(I[re], p), S = j.length === 1 ? 0 : j.filter((le) => te(le)).length, h = Math.abs(v) - (r.value.minMaxRawRange ? 0 : S);
      if (r.value.minRange && r.value.maxRange)
        return h >= +r.value.minRange && h <= +r.value.maxRange;
      if (r.value.minRange) return h >= +r.value.minRange;
      if (r.value.maxRange) return h <= +r.value.maxRange;
    }
    return !0;
  }, O = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, z = (p) => Array.isArray(p) ? [p[0] ? Ca(p[0]) : null, p[1] ? Ca(p[1]) : null] : Ca(p), K = (p, I, re) => p.find(
    (v) => +v.hours === gt(I) && v.minutes === "*" ? !0 : +v.minutes === wt(I) && +v.hours === gt(I)
  ) && re, oe = (p, I, re) => {
    const [v, j] = p, [S, h] = I;
    return !K(v, S, re) && !K(j, h, re) && re;
  }, q = (p, I) => {
    const re = Array.isArray(I) ? I : [I];
    return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? oe(e.disabledTimes, re, p) : !re.some((v) => K(e.disabledTimes, v, p)) : p;
  }, R = (p, I) => {
    const re = Array.isArray(I) ? [Pt(I[0]), I[1] ? Pt(I[1]) : void 0] : Pt(I), v = !e.disabledTimes(re);
    return p && v;
  }, x = (p, I) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? q(I, p) : R(I, p) : I, B = (p) => {
    let I = !0;
    if (!p || O()) return !0;
    const re = !a.value.minDate && !a.value.maxDate ? z(p) : p;
    return (e.maxTime || a.value.maxDate) && (I = fn(
      e.maxTime,
      a.value.maxDate,
      "max",
      Ne(re),
      I
    )), (e.minTime || a.value.minDate) && (I = fn(
      e.minTime,
      a.value.minDate,
      "min",
      Ne(re),
      I
    )), x(p, I);
  }, G = (p) => {
    if (!e.monthPicker) return !0;
    let I = !0;
    const re = U(st(p));
    if (a.value.minDate && a.value.maxDate) {
      const v = U(st(a.value.minDate)), j = U(st(a.value.maxDate));
      return Ie(re, v) && _e(re, j) || $e(re, v) || $e(re, j);
    }
    if (a.value.minDate) {
      const v = U(st(a.value.minDate));
      I = Ie(re, v) || $e(re, v);
    }
    if (a.value.maxDate) {
      const v = U(st(a.value.maxDate));
      I = _e(re, v) || $e(re, v);
    }
    return I;
  }, de = Q(() => (p) => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : B(p)), ve = Q(() => (p) => e.monthPicker ? Array.isArray(p) && (r.value.enabled || n.value.enabled) ? !p.filter((re) => !G(re)).length : G(p) : !0);
  return {
    isDisabled: te,
    validateDate: Y,
    validateMonthYearInRange: $,
    isDateRangeAllowed: C,
    checkMinMaxRange: N,
    isValidTime: B,
    isTimeValid: de,
    isMonthValid: ve
  };
}, ga = () => {
  const e = Q(() => (a, n) => a == null ? void 0 : a.includes(n)), t = Q(() => (a, n) => a.count ? a.solo ? !0 : n === 0 : !0), r = Q(() => (a, n) => a.count ? a.solo ? !0 : n === a.count - 1 : !0);
  return { hideNavigationButtons: e, showLeftIcon: t, showRightIcon: r };
}, oo = (e, t, r) => {
  const a = ee(0), n = qt({
    [St.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
    [St.calendar]: !1,
    [St.header]: !1
  }), d = Q(() => e.monthPicker || e.timePicker), f = (T) => {
    var $;
    if (($ = e.flow) != null && $.length) {
      if (!T && d.value) return m();
      n[T] = !0, Object.keys(n).filter((w) => !n[w]).length || m();
    }
  }, g = () => {
    var T, $;
    (T = e.flow) != null && T.length && a.value !== -1 && (a.value += 1, t("flow-step", a.value), m()), (($ = e.flow) == null ? void 0 : $.length) === a.value && at().then(() => Y());
  }, Y = () => {
    a.value = -1;
  }, y = (T, $, ...w) => {
    var te, C;
    e.flow[a.value] === T && r.value && ((C = (te = r.value)[$]) == null || C.call(te, ...w));
  }, m = (T = 0) => {
    T && (a.value += T), y(je.month, "toggleMonthPicker", !0), y(je.year, "toggleYearPicker", !0), y(je.calendar, "toggleTimePicker", !1, !0), y(je.time, "toggleTimePicker", !0, !0);
    const $ = e.flow[a.value];
    ($ === je.hours || $ === je.minutes || $ === je.seconds) && y($, "toggleTimePicker", !0, !0, $);
  };
  return { childMount: f, updateFlowStep: g, resetFlow: Y, handleFlow: m, flowStep: a };
}, so = {
  key: 1,
  class: "dp__input_wrap"
}, uo = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"], io = {
  key: 2,
  class: "dp--clear-btn"
}, co = ["aria-label"], fo = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...va
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur",
    "real-blur",
    "text-input"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, {
      defaultedTextInput: d,
      defaultedAriaLabels: f,
      defaultedInline: g,
      defaultedConfig: Y,
      defaultedRange: y,
      defaultedMultiDates: m,
      defaultedUI: T,
      getDefaultPattern: $,
      getDefaultStartTime: w
    } = Be(n), { checkMinMaxRange: te } = Mt(n), C = ee(), W = ee(null), c = ee(!1), N = ee(!1), O = Q(
      () => ({
        dp__pointer: !n.disabled && !n.readonly && !d.value.enabled,
        dp__disabled: n.disabled,
        dp__input_readonly: !d.value.enabled,
        dp__input: !0,
        dp__input_icon_pad: !n.hideInputIcon,
        dp__input_valid: typeof n.state == "boolean" ? n.state : !1,
        dp__input_invalid: typeof n.state == "boolean" ? !n.state : !1,
        dp__input_focus: c.value || n.isMenuOpen,
        dp__input_reg: !d.value.enabled,
        ...T.value.input ?? {}
      })
    ), z = () => {
      a("set-input-date", null), n.clearable && n.autoApply && (a("set-empty-date"), C.value = null);
    }, K = (h) => {
      const le = w();
      return Tl(
        h,
        d.value.format ?? $(),
        le ?? _n({}, n.enableSeconds),
        n.inputValue,
        N.value,
        n.formatLocale
      );
    }, oe = (h) => {
      const { rangeSeparator: le } = d.value, [E, D] = h.split(`${le}`);
      if (E) {
        const Z = K(E.trim()), u = D ? K(D.trim()) : null;
        if (_t(Z, u)) return;
        const k = Z && u ? [Z, u] : [Z];
        te(u, k, 0) && (C.value = Z ? k : null);
      }
    }, q = () => {
      N.value = !0;
    }, R = (h) => {
      if (y.value.enabled)
        oe(h);
      else if (m.value.enabled) {
        const le = h.split(";");
        C.value = le.map((E) => K(E.trim())).filter((E) => E);
      } else
        C.value = K(h);
    }, x = (h) => {
      var E;
      const le = typeof h == "string" ? h : (E = h.target) == null ? void 0 : E.value;
      le !== "" ? (d.value.openMenu && !n.isMenuOpen && a("open"), R(le), a("set-input-date", C.value)) : z(), N.value = !1, a("update:input-value", le), a("text-input", h, C.value);
    }, B = (h) => {
      d.value.enabled ? (R(h.target.value), d.value.enterSubmit && za(C.value) && n.inputValue !== "" ? (a("set-input-date", C.value, !0), C.value = null) : d.value.enterSubmit && n.inputValue === "" && (C.value = null, a("clear"))) : ve(h);
    }, G = (h, le) => {
      d.value.enabled && d.value.tabSubmit && !le && R(h.target.value), d.value.tabSubmit && za(C.value) && n.inputValue !== "" ? (a("set-input-date", C.value, !0, !0), C.value = null) : d.value.tabSubmit && n.inputValue === "" && (C.value = null, a("clear", !0));
    }, de = () => {
      c.value = !0, a("focus"), at().then(() => {
        var h;
        d.value.enabled && d.value.selectOnFocus && ((h = W.value) == null || h.select());
      });
    }, ve = (h) => {
      if (bt(h, Y.value, !0), d.value.enabled && d.value.openMenu && !g.value.input) {
        if (d.value.openMenu === "open" && !n.isMenuOpen) return a("open");
        if (d.value.openMenu === "toggle") return a("toggle");
      } else d.value.enabled || a("toggle");
    }, p = () => {
      a("real-blur"), c.value = !1, (!n.isMenuOpen || g.value.enabled && g.value.input) && a("blur"), n.autoApply && d.value.enabled && C.value && !n.isMenuOpen && (a("set-input-date", C.value), a("select-date"), C.value = null);
    }, I = (h) => {
      bt(h, Y.value, !0), a("clear");
    }, re = (h) => {
      if (h.key === "Tab" && G(h), h.key === "Enter" && B(h), !d.value.enabled) {
        if (h.code === "Tab") return;
        h.preventDefault();
      }
    }, v = () => {
      var h;
      (h = W.value) == null || h.focus({ preventScroll: !0 });
    }, j = (h) => {
      C.value = h;
    }, S = (h) => {
      h.key === Ce.tab && G(h, !0);
    };
    return t({
      focusInput: v,
      setParsedDate: j
    }), (h, le) => {
      var E, D, Z;
      return A(), V("div", { onClick: ve }, [
        h.$slots.trigger && !h.$slots["dp-input"] && !s(g).enabled ? ue(h.$slots, "trigger", { key: 0 }) : J("", !0),
        !h.$slots.trigger && (!s(g).enabled || s(g).input) ? (A(), V("div", so, [
          h.$slots["dp-input"] && !h.$slots.trigger && (!s(g).enabled || s(g).enabled && s(g).input) ? ue(h.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            isMenuOpen: e.isMenuOpen,
            onInput: x,
            onEnter: B,
            onTab: G,
            onClear: I,
            onBlur: p,
            onKeypress: re,
            onPaste: q,
            onFocus: de,
            openMenu: () => h.$emit("open"),
            closeMenu: () => h.$emit("close"),
            toggleMenu: () => h.$emit("toggle")
          }) : J("", !0),
          h.$slots["dp-input"] ? J("", !0) : (A(), V("input", {
            key: 1,
            id: h.uid ? `dp-input-${h.uid}` : void 0,
            ref_key: "inputRef",
            ref: W,
            "data-test-id": "dp-input",
            name: h.name,
            class: De(O.value),
            inputmode: s(d).enabled ? "text" : "none",
            placeholder: h.placeholder,
            disabled: h.disabled,
            readonly: h.readonly,
            required: h.required,
            value: e.inputValue,
            autocomplete: h.autocomplete,
            "aria-label": (E = s(f)) == null ? void 0 : E.input,
            "aria-disabled": h.disabled || void 0,
            "aria-invalid": h.state === !1 ? !0 : void 0,
            onInput: x,
            onBlur: p,
            onFocus: de,
            onKeypress: re,
            onKeydown: le[0] || (le[0] = (u) => re(u)),
            onPaste: q
          }, null, 42, uo)),
          ye("div", {
            onClick: le[3] || (le[3] = (u) => a("toggle"))
          }, [
            h.$slots["input-icon"] && !h.hideInputIcon ? (A(), V("span", {
              key: 0,
              class: "dp__input_icon",
              onClick: le[1] || (le[1] = (u) => a("toggle"))
            }, [
              ue(h.$slots, "input-icon")
            ])) : J("", !0),
            !h.$slots["input-icon"] && !h.hideInputIcon && !h.$slots["dp-input"] ? (A(), Ae(s(Ft), {
              key: 1,
              "aria-label": (D = s(f)) == null ? void 0 : D.calendarIcon,
              class: "dp__input_icon dp__input_icons",
              onClick: le[2] || (le[2] = (u) => a("toggle"))
            }, null, 8, ["aria-label"])) : J("", !0)
          ]),
          h.$slots["clear-icon"] && e.inputValue && h.clearable && !h.disabled && !h.readonly ? (A(), V("span", io, [
            ue(h.$slots, "clear-icon", { clear: I })
          ])) : J("", !0),
          h.clearable && !h.$slots["clear-icon"] && e.inputValue && !h.disabled && !h.readonly ? (A(), V("button", {
            key: 3,
            "aria-label": (Z = s(f)) == null ? void 0 : Z.clearInput,
            class: "dp--clear-btn",
            type: "button",
            onKeydown: le[4] || (le[4] = (u) => s(qe)(u, () => I(u), !0, S)),
            onClick: le[5] || (le[5] = jt((u) => I(u), ["prevent"]))
          }, [
            tt(s(An), {
              class: "dp__input_icons",
              "data-test-id": "clear-icon"
            })
          ], 40, co)) : J("", !0)
        ])) : J("", !0)
      ]);
    };
  }
}), vo = typeof window < "u" ? window : void 0, Na = () => {
}, mo = (e) => Zn() ? (xn(e), !0) : !1, po = (e, t, r, a) => {
  if (!e) return Na;
  let n = Na;
  const d = lt(
    () => s(e),
    (g) => {
      n(), g && (g.addEventListener(t, r, a), n = () => {
        g.removeEventListener(t, r, a), n = Na;
      });
    },
    { immediate: !0, flush: "post" }
  ), f = () => {
    d(), n();
  };
  return mo(f), f;
}, go = (e, t, r, a = {}) => {
  const { window: n = vo, event: d = "pointerdown" } = a;
  return n ? po(n, d, (g) => {
    const Y = Le(e), y = Le(t);
    !Y || !y || Y === g.target || g.composedPath().includes(Y) || g.composedPath().includes(y) || r(g);
  }, { passive: !0 }) : void 0;
}, yo = ["data-dp-mobile"], ho = /* @__PURE__ */ Ue({
  compatConfig: {
    MODE: 3
  },
  __name: "VueDatePicker",
  props: {
    ...va
  },
  emits: [
    "update:model-value",
    "update:model-timezone-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open",
    "time-picker-close",
    "am-pm-change",
    "range-start",
    "hover-day",
    "range-hovering",
    "range-end",
    "date-update",
    "invalid-date",
    "overlay-toggle",
    "text-input"
  ],
  setup(e, { expose: t, emit: r }) {
    const a = r, n = e, d = Rt(), f = ee(!1), g = Vt(n, "modelValue"), Y = Vt(n, "timezone"), y = ee(null), m = ee(null), T = ee(null), $ = ee(!1), w = ee(null), te = ee(!1), C = ee(!1), W = ee(!1), c = ee(!1), { setMenuFocused: N, setShiftKey: O } = Fn(), { clearArrowNav: z } = Dt(), { validateDate: K, isValidTime: oe } = Mt(n), {
      defaultedTransitions: q,
      defaultedTextInput: R,
      defaultedInline: x,
      defaultedConfig: B,
      defaultedRange: G,
      defaultedMultiDates: de
    } = Be(n), { menuTransition: ve, showTransition: p } = Zt(q), { isMobile: I } = jn(B);
    We(() => {
      k(n.modelValue), at().then(() => {
        if (!x.value.enabled) {
          const o = E(w.value);
          o == null || o.addEventListener("scroll", _), window == null || window.addEventListener("resize", ne);
        }
      }), x.value.enabled && (f.value = !0), window == null || window.addEventListener("keyup", X), window == null || window.addEventListener("keydown", se);
    }), Xt(() => {
      if (!x.value.enabled) {
        const o = E(w.value);
        o == null || o.removeEventListener("scroll", _), window == null || window.removeEventListener("resize", ne);
      }
      window == null || window.removeEventListener("keyup", X), window == null || window.removeEventListener("keydown", se);
    });
    const re = et(d, "all", n.presetDates), v = et(d, "input");
    lt(
      [g, Y],
      () => {
        k(g.value);
      },
      { deep: !0 }
    );
    const { openOnTop: j, menuStyle: S, xCorrect: h, setMenuPosition: le, getScrollableParent: E, shadowRender: D } = ao({
      menuRef: y,
      menuRefInner: m,
      inputRef: T,
      pickerWrapperRef: w,
      inline: x,
      emit: a,
      props: n,
      slots: d
    }), {
      inputValue: Z,
      internalModelValue: u,
      parseExternalModelValue: k,
      emitModelValue: F,
      formatInputValue: i,
      checkBeforeEmit: ae
    } = Jl(a, n, $), me = Q(
      () => ({
        dp__main: !0,
        dp__theme_dark: n.dark,
        dp__theme_light: !n.dark,
        dp__flex_display: x.value.enabled,
        "dp--flex-display-collapsed": W.value,
        dp__flex_display_with_input: x.value.input
      })
    ), P = Q(() => n.dark ? "dp__theme_dark" : "dp__theme_light"), ge = Q(() => n.teleport ? {
      to: typeof n.teleport == "boolean" ? "body" : n.teleport,
      disabled: !n.teleport || x.value.enabled
    } : {}), ce = Q(() => ({ class: "dp__outer_menu_wrap" })), Se = Q(() => x.value.enabled && (n.timePicker || n.monthPicker || n.yearPicker || n.quarterPicker)), l = () => {
      var o, M;
      return ((M = (o = T.value) == null ? void 0 : o.$el) == null ? void 0 : M.getBoundingClientRect()) ?? { width: 0, left: 0, right: 0 };
    }, _ = () => {
      f.value && (B.value.closeOnScroll ? Fe() : le());
    }, ne = () => {
      var M;
      f.value && le();
      const o = ((M = m.value) == null ? void 0 : M.$el.getBoundingClientRect().width) ?? 0;
      W.value = document.body.offsetWidth <= o;
    }, X = (o) => {
      o.key === "Tab" && !x.value.enabled && !n.teleport && B.value.tabOutClosesMenu && (w.value.contains(document.activeElement) || Fe()), C.value = o.shiftKey;
    }, se = (o) => {
      C.value = o.shiftKey;
    }, he = () => {
      !n.disabled && !n.readonly && (D(gn, n), le(!1), f.value = !0, f.value && a("open"), f.value || ft(), k(n.modelValue));
    }, b = () => {
      var o;
      Z.value = "", ft(), (o = T.value) == null || o.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), B.value.closeOnClearValue && Fe();
    }, L = () => {
      const o = u.value;
      return !o || !Array.isArray(o) && K(o) ? !0 : Array.isArray(o) ? de.value.enabled || o.length === 2 && K(o[0]) && K(o[1]) ? !0 : G.value.partialRange && !n.timePicker ? K(o[0]) : !1 : !1;
    }, pe = () => {
      ae() && L() ? (F(), Fe()) : a("invalid-select", u.value);
    }, Ee = (o) => {
      it(), F(), B.value.closeOnAutoApply && !o && Fe();
    }, it = () => {
      T.value && R.value.enabled && T.value.setParsedDate(u.value);
    }, ie = (o = !1) => {
      n.autoApply && oe(u.value) && L() && (G.value.enabled && Array.isArray(u.value) ? (G.value.partialRange || u.value.length === 2) && Ee(o) : Ee(o));
    }, ft = () => {
      R.value.enabled || (u.value = null);
    }, Fe = (o = !1) => {
      o && u.value && B.value.setDateOnMenuClose && pe(), x.value.enabled || (f.value && (f.value = !1, h.value = !1, N(!1), O(!1), z(), a("closed"), Z.value && k(g.value)), ft(), a("blur"));
    }, ea = (o, M, H = !1) => {
      if (!o) {
        u.value = null;
        return;
      }
      const be = Array.isArray(o) ? !o.some((xe) => !K(xe)) : K(o), Te = oe(o);
      be && Te ? (c.value = !0, u.value = o, M && (te.value = H, pe(), a("text-submit")), at().then(() => {
        c.value = !1;
      })) : a("invalid-date", o);
    }, Lt = () => {
      n.autoApply && oe(u.value) && F(), it();
    }, ta = () => f.value ? Fe() : he(), ya = (o) => {
      u.value = o;
    }, ha = () => {
      R.value.enabled && ($.value = !0, i()), a("focus");
    }, ba = () => {
      if (R.value.enabled && ($.value = !1, k(n.modelValue), te.value)) {
        const o = $l(w.value, C.value);
        o == null || o.focus();
      }
      a("blur");
    }, ka = (o) => {
      m.value && m.value.updateMonthYear(0, {
        month: sn(o.month),
        year: sn(o.year)
      });
    }, wa = (o) => {
      k(o ?? n.modelValue);
    }, Da = (o, M) => {
      var H;
      (H = m.value) == null || H.switchView(o, M);
    }, Ma = (o) => B.value.onClickOutside ? B.value.onClickOutside(o) : Fe(!0), en = (o = 0) => {
      var M;
      (M = m.value) == null || M.handleFlow(o);
    };
    return go(y, T, () => Ma(L)), t({
      closeMenu: Fe,
      selectDate: pe,
      clearValue: b,
      openMenu: he,
      onScroll: _,
      formatInputValue: i,
      // exposed for testing purposes
      updateInternalModelValue: ya,
      // modify internal modelValue
      setMonthYear: ka,
      parseModel: wa,
      switchView: Da,
      toggleMenu: ta,
      handleFlow: en,
      dpWrapMenuRef: y
    }), (o, M) => (A(), V("div", {
      ref_key: "pickerWrapperRef",
      ref: w,
      class: De(me.value),
      "data-datepicker-instance": "",
      "data-dp-mobile": s(I)
    }, [
      tt(fo, He({
        ref_key: "inputRef",
        ref: T,
        "input-value": s(Z),
        "onUpdate:inputValue": M[0] || (M[0] = (H) => an(Z) ? Z.value = H : null),
        "is-menu-open": f.value
      }, o.$props, {
        onClear: b,
        onOpen: he,
        onSetInputDate: ea,
        onSetEmptyDate: s(F),
        onSelectDate: pe,
        onToggle: ta,
        onClose: Fe,
        onFocus: ha,
        onBlur: ba,
        onRealBlur: M[1] || (M[1] = (H) => $.value = !1),
        onTextInput: M[2] || (M[2] = (H) => o.$emit("text-input", H))
      }), Ge({ _: 2 }, [
        Oe(s(v), (H, be) => ({
          name: H,
          fn: we((Te) => [
            ue(o.$slots, H, ze(Je(Te)))
          ])
        }))
      ]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]),
      (A(), Ae(ca(o.teleport ? el : "div"), ze(Je(ge.value)), {
        default: we(() => [
          tt(Et, {
            name: s(ve)(s(j)),
            css: s(p) && !s(x).enabled
          }, {
            default: we(() => [
              f.value ? (A(), V("div", He({
                key: 0,
                ref_key: "dpWrapMenuRef",
                ref: y
              }, ce.value, {
                class: { "dp--menu-wrapper": !s(x).enabled },
                style: s(x).enabled ? void 0 : s(S)
              }), [
                tt(gn, He({
                  ref_key: "dpMenuRef",
                  ref: m
                }, o.$props, {
                  "internal-model-value": s(u),
                  "onUpdate:internalModelValue": M[3] || (M[3] = (H) => an(u) ? u.value = H : null),
                  class: { [P.value]: !0, "dp--menu-wrapper": o.teleport },
                  "open-on-top": s(j),
                  "no-overlay-focus": Se.value,
                  collapse: W.value,
                  "get-input-rect": l,
                  "is-text-input-date": c.value,
                  onClosePicker: Fe,
                  onSelectDate: pe,
                  onAutoApply: ie,
                  onTimeUpdate: Lt,
                  onFlowStep: M[4] || (M[4] = (H) => o.$emit("flow-step", H)),
                  onUpdateMonthYear: M[5] || (M[5] = (H) => o.$emit("update-month-year", H)),
                  onInvalidSelect: M[6] || (M[6] = (H) => o.$emit("invalid-select", s(u))),
                  onAutoApplyInvalid: M[7] || (M[7] = (H) => o.$emit("invalid-select", H)),
                  onInvalidFixedRange: M[8] || (M[8] = (H) => o.$emit("invalid-fixed-range", H)),
                  onRecalculatePosition: s(le),
                  onTooltipOpen: M[9] || (M[9] = (H) => o.$emit("tooltip-open", H)),
                  onTooltipClose: M[10] || (M[10] = (H) => o.$emit("tooltip-close", H)),
                  onTimePickerOpen: M[11] || (M[11] = (H) => o.$emit("time-picker-open", H)),
                  onTimePickerClose: M[12] || (M[12] = (H) => o.$emit("time-picker-close", H)),
                  onAmPmChange: M[13] || (M[13] = (H) => o.$emit("am-pm-change", H)),
                  onRangeStart: M[14] || (M[14] = (H) => o.$emit("range-start", H)),
                  onRangeHovering: M[15] || (M[15] = (H) => o.$emit("range-hovering", H)),
                  onRangeEnd: M[16] || (M[16] = (H) => o.$emit("range-end", H)),
                  onDateUpdate: M[17] || (M[17] = (H) => o.$emit("date-update", H)),
                  onHoverDay: M[18] || (M[18] = (H) => o.$emit("hover-day", H)),
                  onInvalidDate: M[19] || (M[19] = (H) => o.$emit("invalid-date", H)),
                  onOverlayToggle: M[20] || (M[20] = (H) => o.$emit("overlay-toggle", H)),
                  onMenuBlur: M[21] || (M[21] = (H) => o.$emit("blur"))
                }), Ge({ _: 2 }, [
                  Oe(s(re), (H, be) => ({
                    name: H,
                    fn: we((Te) => [
                      ue(o.$slots, H, ze(Je({ ...Te })))
                    ])
                  }))
                ]), 1040, ["internal-model-value", "class", "open-on-top", "no-overlay-focus", "collapse", "is-text-input-date", "onRecalculatePosition"])
              ], 16)) : J("", !0)
            ]),
            _: 3
          }, 8, ["name", "css"])
        ]),
        _: 3
      }, 16))
    ], 10, yo));
  }
}), Kn = /* @__PURE__ */ (() => {
  const e = ho;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), bo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kn
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(bo).forEach(([e, t]) => {
  e !== "default" && (Kn[e] = t);
});
export {
  Kn as default
};
