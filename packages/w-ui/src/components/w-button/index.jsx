import { defineComponent } from 'vue';
import css from './style.module.css';

export default defineComponent({
  props: ['type'],
  setup(props, { slots }) {
    const type = props.type ? `${css['w-button']} ${css[props.type]}` : `${css['w-button']}`;

    return () => <button className={type}>{slots.default()}</button>;
  },
});
