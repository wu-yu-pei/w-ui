## Button

### 示例

<w-button>我是按钮</w-button>
<w-button type="success">我是按钮</w-button>
<w-button type="error">我是按钮</w-button>

### 代码

```jsx
export default defineComponent({
  props: ['type'],
  setup(props) {
    const btnClick = () => {
      console.log('btn click');
    };
    return () => (
      <>
        <WButton type="" onClick={btnClick}>
          我是普通按钮
        </WButton>

        <WButton type="success" onClick={btnClick}>
          我是成功按钮
        </WButton>

        <WButton type="error" onClick={btnClick}>
          我是失败按钮
        </WButton>
      </>
    );
  }
});
```
