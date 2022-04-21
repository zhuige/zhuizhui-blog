# vue-router源码

## Hash 模式
- URL 中 # 后面的内容作为路径地址
- 监听hashchange事件
- 根据当前路由地址找到对应的组件重新渲染

## history 模式
- 通过history.pushState()方法改变地址栏
- 监听popstate事件
- 根据当前路由地址找到对应的组件重新渲染