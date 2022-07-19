import DefaultTheme from 'vitepress/theme'

import { WButton, WCard, WTag } from '@w-ui/w-ui'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('w-button', WButton)
    app.component('w-card', WCard)
    app.component('w-tag', WTag)
  }
}