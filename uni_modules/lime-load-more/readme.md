# lime-load-more 加载更多

一个功能丰富的加载更多组件，用于列表底部上拉加载更多数据的交互操作。支持多种状态展示、自定义文本和图标等配置，可用于各种列表加载场景。组件提供了丰富的自定义选项，可以满足各种复杂的加载需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [加载更多文档 - 站点1](https://limex.qcoon.cn/components/load-more.html)
- [加载更多文档 - 站点2](https://limeui.netlify.app/components/load-more.html)
- [加载更多文档 - 站点3](https://limeui.familyzone.top/components/load-more.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-load-more`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-load-more`组件


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

### 自定义样式
通过设置样式相关属性，可以自定义组件的外观。

```html
<l-load-more 
  :status="status"
  line
  lineColor="#dcdee0"
  height="60"
  contentColor="#1989fa"
></l-load-more>
```

## Vue2使用说明
main.js中添加以下代码：
```js
// vue2项目中使用
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

详细配置请参考官方文档：[Vue Composition API](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)

## 插件标签说明
`l-load-more` 为组件标签   
`lime-load-more` 为演示标签


## 状态说明

| 状态值       | 交互行为                           | 适用场景                         |
|--------------|-----------------------------------|----------------------------------|
| `remaining`  | 点击触发 `load-more` | 数据未满一屏需手动加载时            |
| `loading`    | 禁用交互，加载状态               | 数据请求过程中                    |
| `finished`   | 禁用交互，终止提示                | 所有数据加载完毕                  |
| `error`      | 点击触发 `reload`     | 加载失败需重试时                  |


## API文档

### Props 属性说明

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

### Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| load-more | 状态为remaining时点击触发 |  |
| reload | 状态为error时点击触发 |  |

### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| remaining | 还有更多数据可加载 |
| loading | 正在加载中 |
| error | 加载失败 |
| finished | 全部加载完成 |

## 主题定制

组件提供了以下CSS变量，可以通过自定义CSS变量来自定义组件样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-load-more-height` | `auto` | 组件高度 |
| `--l-load-more-text-color` | `$text-color-3` | 文本颜色 |
| `--l-load-more-font-size` | `$font-size` | 文本字体大小 |
| `--l-load-more-color` | `$text-color-4` | 加载图标颜色,uniappx app无效 |
| `--l-load-more-icon-size` | `20px` | 加载图标尺寸 |
| `--l-load-more-gap` | `$spacer-xs` | 图标与文本间距 |



## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![支付宝赞赏码](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![微信赞赏码](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |