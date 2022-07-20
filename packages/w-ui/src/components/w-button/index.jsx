import { defineComponent } from 'vue';
import css from './style.module.css';

export default defineComponent({
  props: ['type', 'round', 'plain'],
  setup(props, { slots }) {
    const type = props.type
      ? `${css['w-button']} ${css[props.type]}`
      : `${css['w-button']}`;

    const Shape = () => {
      for (let key in props) {
        if (props[key] == '') {
          return `${type}  ${css[key]}`;
        }
      }
      return type;
    };

    return () => <button className={Shape()}>{slots.default()}</button>;
  },
});
