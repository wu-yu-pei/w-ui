import { openBlock as _, createElementBlock as s, defineComponent as a, createVNode as d, createTextVNode as u } from "vue";
const o = (t) => (t.install = (e) => {
  e.component(t.name, t);
}, t);
const l = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [c, r] of e)
    n[c] = r;
  return n;
}, i = {}, f = { class: "w-button" };
function p(t, e) {
  return _(), s("button", f, "w-ui-bttton");
}
const x = /* @__PURE__ */ l(i, [["render", p], ["__scopeId", "data-v-7b1799ee"]]), h = o(x), b = a({
  render() {
    return d("h1", null, [u("w-ui-card")]);
  }
}), m = o(b);
export {
  h as WButton,
  m as WCard
};
