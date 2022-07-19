import { defineComponent } from 'vue';
import './style.css';
export default defineComponent({
  props: ['type'],
  setup(props, { slots }) {
    const type = () => {
      return props.type ? `w-button ${props.type}` : 'w-button';
    };

    return () => <button className={type()}>{slots.default()}</button>;
  },
});
