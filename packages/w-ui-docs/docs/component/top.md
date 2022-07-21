## top

### 示例

请看右下角

<w-top> ↑ </w-top>

### 代码
```vue
<w-top> ↑ </w-top>
```

### 源码
```jsx
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

```
```css
.w-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: 1px solid #000;
  cursor: pointer;
  user-select: none;
}

.w-top:hover {
  opacity: 0.5;
}

```