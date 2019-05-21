module.exports = {
  title: 'title is here',
  description: 'just playing around',
  themeConfig:{
    nav: [
      {text: 'home', link: '/'},
      {text: 'readme2', link: '/readme2.md'},
      {text: 'external', link: 'http://google.com'},
      {text: 'language', items: [
          {text: 'chinese', link: '/language/chinese'},
          {text: 'japanese', link: '/language/japanese'}
      ]},
      {text: 'groups', items: [
          {text: 'group1', items: [
              {text: 'group1-1', link: '/'},
              {text: 'group1-2', link: '/'}
          ]}
      ]}
    ],
    sidebar: [
      '/readme2',
      ['/readme3', 'explicit link text']
    ],
    repo: 'https://github.com/Tinalst/vuepress-blob',
    editLinks: true
  }
};
