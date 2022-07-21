import { defineComponent } from 'vue';
import className from 'classname';
import css from './style.css';

export default defineComponent({
  props: ['type', 'round', 'plain'],
  setup(props, { slots }) {
    const classes = className('w-button', {
      [props.type]: props.type && true,
      round: props.round == '' && true,
      plain: props.plain == '' && true,
    });

    return () => <button className={classes}>{slots.default()}</button>;
  },
});
