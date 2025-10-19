# lime-load-more 加载更多
- 一般用于标识页面底部加载数据时的状态，兼容uniapp/uniappx
- 插件依赖`lime-style`,`lime-loading`,`lime-shared`,不喜勿下

## 文档
  [load-more【站点1】](https://limex.qcoon.cn/components/load-more.html)
  [load-more【站点2】](https://limeui.netlify.app/components/load-more.html)
  [load-more【站点3】](https://limeui.familyzone.top/components/load-more.html)



## 安装
插件市场导入即可，首次导入可能需要重新编译


## 代码演示
### 基础使用
通过设置 `status` 属性展示不同的状态信息

```html
<!-- remaining 点击触发 load-more 事件上 -->
<l-load-more status="remaining" @load-more="load"></l-load-more>
<l-load-more status="loading"></l-load-more>
<l-load-more status="finished"></l-load-more>
<!-- error 点击触发 reload 事件上 -->
<l-load-more status="error" @reload="reload"></l-load-more>
```
```js
const load = () => {
	console.log('点击了 load')
}
const reload = ()=>{
	console.log('点击了 reload')
}
```

### 自定义文案
```html
<l-load-more status="remaining" remainingText="点击加载更多"></l-load-more>
<l-load-more status="loading" loadingText="努力加载中"></l-load-more>
<l-load-more status="finished" finishedText="已经完成所有数据加载"></l-load-more>
<l-load-more status="error" errorText="发生错误，点击再次出发"></l-load-more>
```

### 查看示例
- 导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-load-more/compoents/lime-load-more -->
<lime-load-more />
```


### 插件标签
- 默认 l-load-more 为 component
- 默认 lime-load-more 为 demo

### Vue2使用
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可
```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```


## 状态说明

| 状态值       | 交互行为                           | 适用场景                         |
|--------------|-----------------------------------|----------------------------------|
| `remaining`  | 点击触发 `load-more` | 数据未满一屏需手动加载时            |
| `loading`    | 禁用交互，加载状态               | 数据请求过程中                    |
| `finished`   | 禁用交互，终止提示                | 所有数据加载完毕                  |
| `error`      | 点击触发 `reload`     | 加载失败需重试时                  |


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| status | 插件状态 | _string_ | `remaining` |
| remainingText | remaining文案 | _string_ | `-` |
| loadingText | loading文案 | _string_ | `-` |
| finishedText | finished文案 | _string_ | `-` |
| errorText | error文案 | _string_ | `-` |
| loadingColor | 加载图标颜色 | _string_ | `-` |
| loadingSize | 加载图标大小  | _string_ | `-` |
| color | 文本颜色  | _string_ | `-` |
| fontSize | 字体大小  | _string_ | `-` |


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。uvue app无效

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
--l-load-more-height | auto | - 
--l-load-more-text-color | $text-color-3 | - 
--l-load-more-font-size | $font-size | - 
--l-load-more-color | $text-color-4 | - 
--l-load-more-icon-size | 20px | - 
--l-load-more-gap | $spacer-xs | - 

## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)