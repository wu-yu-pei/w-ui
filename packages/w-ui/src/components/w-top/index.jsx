import { defineComponent } from 'vue';
import css from './style.module.css';

export default defineComponent({
  props: [],
  setup(props, { slots }) {
    return () => <div>top</div>;
  },
});
