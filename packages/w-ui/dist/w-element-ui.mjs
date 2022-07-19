import { defineComponent as n, createVNode as e, createTextVNode as r } from "vue";
const o = (t) => (t.install = (u) => {
  u.component(t.name, t);
}, t), a = n({
  render() {
    return e("h1", null, [r("w-ui-bttton")]);
  }
}), c = o(a), l = n({
  render() {
    return e("h1", null, [r("w-ui-card")]);
  }
}), i = o(l), d = n({
  render() {
    return e("h1", null, [r("w-ui-tag")]);
  }
}), h = o(d);
export {
  c as WButton,
  i as WCard,
  h as WTag
};
