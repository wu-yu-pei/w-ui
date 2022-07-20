import DefaultTheme from 'vitepress/theme';

import { WButton, WCard } from '@w-ui/w-ui';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('w-button', WButton);
    app.component('w-card', WCard);
  },
};
