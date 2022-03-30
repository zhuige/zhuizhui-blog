# js

## js 可选链语法

博主开发时遇到的坑

需求是如果有 fn 函数存在，则执行 fn，让 a 的值经过 fn 函数处理，如果 fn 不存在，直接使用 value 的值即可

```javascript
const { fn, value } = obj
const a = fn?.(value) || value
```

注意以上这个写法有坑，如果 fn 执行后返回的是 false 则 a 的值是 value 而不是 false
应该这样改进

```javascript
const a = fn?.(value) ?? value
```

这样的意思才是如果 fn 没有则直接取 value 的值
