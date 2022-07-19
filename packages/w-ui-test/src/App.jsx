import { defineComponent } from 'vue';

import { WButton } from '../../w-ui/src/index';

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
  },
});
