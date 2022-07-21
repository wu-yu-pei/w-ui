## Button

### 示例

<w-button >按钮</w-button>
<w-button type="success">按钮</w-button>
<w-button type="error">按钮</w-button>

<w-button plain>按钮</w-button>
<w-button type="success" plain>按钮</w-button>
<w-button type="error" plain>按钮</w-button>

<w-button round>按钮</w-button>
<w-button type="success" round>按钮</w-button>
<w-button type="error" round>按钮</w-button>


### 代码

```html
<w-button>按钮</w-button>
<w-button type="success">按钮</w-button>
<w-button type="error">按钮</w-button>
<br />
<w-button plain>按钮</w-button>
<w-button type="success" plain>按钮</w-button>
<w-button type="error" plain>按钮</w-button>
<br />
<w-button round>按钮</w-button>
<w-button type="success" round>按钮</w-button>
<w-button type="error" round>按钮</w-button>
```

### 源码

```jsx
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
```

```css
.w-button {
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  line-height: 20px;
}
.w-button:hover {
  opacity: 0.7;
}

.w-button.round {
  border-radius: 50%;
  aspect-ratio: 1;
}

.w-button.plain {
  border-radius: 50px;
}

.w-button.success {
  background-color: blue;
  color: #fff;
}

.w-button.error {
  background-color: red;
  color: #fff;
}
```
