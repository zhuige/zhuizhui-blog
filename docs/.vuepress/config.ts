import { defineConfig } from 'vuepress/config'
import displayFile from './autoSidebar'

export default defineConfig({
  title: '追追的酸',
  description: '追追的酸博客',
  base: '/zhuizhui-blog/',
  themeConfig: {
    logo: '/hero.png',
    smoothScroll: true,
    sidebar: {
      '/面试/': displayFile('面试'),
      '/docker/': displayFile('docker'),
      '/避坑/': displayFile('避坑'),
      '/aboutMe/': ['aboutMe'],
    },
    nav: [
      { text: '前端面试', link: '/面试/' },
      { text: 'docker学习', link: '/docker/' },
      { text: '避坑', link: '/避坑/' },
      { text: '关于我', link: '/aboutMe/' },
    ],
  },
})
