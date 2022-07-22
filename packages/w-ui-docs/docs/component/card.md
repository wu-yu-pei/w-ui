## Card

<w-card title="我是标题">
  <li><a href="http://www.baidu.com">百度</a></li>
  <li><a href="http://www.google.com">Google</a></li>
  <li><a href="http://www.biying.com">必应</a></li>
  <li><a href="http://www.360.com">360</a></li>
</w-card>

<style>
  li {
    list-style:none;
  }
</style>

### 代码
```vue
<w-card title="我是标题">
  <li><a href="http://www.baidu.com">百度</a></li>
  <li><a href="http://www.google.com">Google</a></li>
  <li><a href="http://www.biying.com">必应</a></li>
  <li><a href="http://www.360.com">360</a></li>
</w-card>
```

### 源码
```jsx
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
```

```css
.w-card {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
    box-shadow: 0px 0px 20px 4px #ccc;
}

.w-card h3 {
  margin: 0px;
  padding: 10px 10px;
  border-bottom: 1px solid #ccc;
}

.w-card .w-card-content {
  padding: 10px;
}

```