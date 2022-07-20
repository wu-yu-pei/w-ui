import { defineComponent as r, createVNode as o, createTextVNode as c } from "vue";
const s = (t) => (t.install = (e) => {
  e.component(t.name, t);
}, t), a = "_success_2d2qh_9", d = "_error_2d2qh_14", n = {
  "w-button": "_w-button_2d2qh_1",
  success: a,
  error: d
}, l = r({
  props: ["type"],
  setup(t, {
    slots: e
  }) {
    const u = t.type ? `${n["w-button"]} ${n[t.type]}` : `${n["w-button"]}`;
    return () => o("button", {
      className: u
    }, [e.default()]);
  }
}), i = s(l), _ = r({
  render() {
    return o("h1", null, [c("w-ui-card")]);
  }
}), p = s(_), w = r({
  render() {
    return o("h1", null, [c("w-ui-tag")]);
  }
}), b = s(w);
export {
  i as WButton,
  p as WCard,
  b as WTag
};
