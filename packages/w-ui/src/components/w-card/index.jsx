import { defineComponent } from 'vue';
import './style.css';
export default defineComponent({
  emits: ['title'],
  setup(props, { slots, emit }) {
    const content = slots.default ? slots.default() : '内容';
    return () => (
      <div className="w-card">
        <h3>{props.title ? props.title : 'title'}</h3>
        <div className="w-card-content">{content}</div>
      </div>
    );
  },
});
