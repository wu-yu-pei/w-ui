import { defineComponent } from 'vue';
import './style.css';
export default defineComponent({
  props: ['title'],
  setup(props, { slots, emit }) {
    const content = slots.default ? slots.default() : '内容';
    console.log(props.title);
    return () => (
      <div className="w-card">
        {props.title ? <h3>{props.title}</h3> : ''}
        <div className="w-card-content">{content}</div>
      </div>
    );
  },
});
