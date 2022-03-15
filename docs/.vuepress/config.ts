import { defineConfig } from 'vuepress/config'
import displayFile from './autoSidebar'
export default defineConfig({
  title: '追追的酸',
  description: '追追的酸博客',
  base: '/zhuizhui-blog/',
  themeConfig: {
    smoothScroll: true,
    sidebar: {
      '/面试/': displayFile('面试'),
    },
  },
})
console.log(displayFile('面试'))
