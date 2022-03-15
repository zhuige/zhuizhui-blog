import { defineConfig } from 'vuepress/config'

export default defineConfig({
  title: '追追的酸',
  description: '追追的酸博客',
  base:'/zhuizhui-blog/',
  themeConfig: {
    smoothScroll: true,
    sidebar: {
      '/面试/': [
        ['', '介绍'],
        {
          title: '数据结构与算法',
          collapsable: true,
          children: ['数据结构与算法/时间复杂与空间复杂度科普', '数据结构与算法/栈', '数据结构与算法/链表'],
        },
        // {
        //   title: 'js基础',
        //   collapsable: true,
        //   children: ['js基础/teast'],
        // },
      ],
    },
  },
})
