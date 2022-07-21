import { defineComponent } from 'vue';
import './style.css';

export default defineComponent({
  emits: ['toTop'],
  setup(props, { slots, emit }) {
    const toTop = () => {
      window.scrollTo(0, 0);
      emit('toTop');
    };
    return () => (
      <div className="w-top" onClick={toTop}>
        {slots.default()}
      </div>
    );
  },
});
