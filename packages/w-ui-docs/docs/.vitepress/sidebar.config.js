export default {
  '/component/': [
    {
      text: '组件',
      items: [
        { text: 'Button', link: '/component/button' },
        { text: 'Card', link: '/component/card' },
        { text: 'Tag', link: '/component/tag' }
      ]
    }
  ],
  '/guide/': [
    {
      text: '指南',
      collapsible: true,
      items: [
        // This shows `/guide/index.md` page.
        { text: 'Index', link: '/guide/' }, // /guide/index.md
        { text: 'One', link: '/guide/one' }, // /guide/one.md
        { text: 'Two', link: '/guide/two' } // /guide/two.md
      ]
    }
  ]
}