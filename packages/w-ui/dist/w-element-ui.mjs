import { openBlock as c, createElementBlock as o } from "vue";
const _ = (t) => (t.install = (n) => {
  n.component(t.name, t);
}, t);
const r = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [s, a] of n)
    e[s] = a;
  return e;
}, u = {}, d = { class: "w-button" };
function i(t, n) {
  return c(), o("button", d, "w-ui-bttton");
}
const l = /* @__PURE__ */ r(u, [["render", i], ["__scopeId", "data-v-7b1799ee"]]), b = _(l), f = {};
function p(t, n) {
  return c(), o("div", null, "w-ui-card");
}
const v = /* @__PURE__ */ r(f, [["render", p]]), h = _(v);
export {
  b as WButton,
  h as WCard
};
