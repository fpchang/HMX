# lime-card 卡片组件
一个功能丰富的卡片组件，用于展示内容区块。支持标题、副标题、图标、封面图、自定义操作按钮等多种配置，可用于展示图文信息、产品信息、新闻内容等多种场景。组件提供了丰富的自定义选项，可以满足各种复杂的界面设计需求。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [卡片组件文档 - 站点1](https://limex.qcoon.cn/components/card.html)
- [卡片组件文档 - 站点2](https://limeui.netlify.app/components/card.html)
- [卡片组件文档 - 站点3](https://limeui.familyzone.top/components/card.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-card`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-card`组件

## 代码演示

### 基础用法
最简单的卡片组件用法，只需要设置标题即可。

```html
<l-card title="卡片标题"></l-card>
```


### 基础卡片
包含标题、副标题、额外信息和更多按钮的卡片。

```html
<l-card 
  title="卡片标题" 
  note="副标题"
  extra="更多信息"
  more
>
  <text>这里是卡片内容</text>
</l-card>
```

### 带图标的卡片
在卡片左侧添加图标，可以设置图标的名称、颜色和大小。

```html
<l-card 
  title="卡片标题" 
  icon="home"
  iconColor="#1989fa"
  iconSize="24px"
>
  <text>这里是卡片内容</text>
</l-card>
```

### 带头像的卡片
在卡片左侧添加头像。

```html
<l-card title="我是标题" note="这一定很美吧" image="https://picsum.photos/300/200?random=1"  >
	<text class="text">内容详情内容详情内容详情</text>
</l-card>
```

### 带封面图的卡片
添加封面图片，可以设置图片的裁剪和缩放模式。

```html
<l-card 
  title="卡片标题" 
  cover="https://picsum.photos/300/200?random=1"
  coverMode="aspectFill"
>
  <text>这里是卡片内容</text>
</l-card>
```

### 带操作按钮的卡片
在卡片底部添加操作按钮，可以设置按钮的对齐方式。 
```html
<l-card 
  title="卡片标题"
  :actions="actions"
  actionsAlign="space-between"
>
  <text>这里是卡片内容</text>
</l-card>
```

```js
export default {
  data() {
    return {
      actions: [
        {
          content: '操作1',
          type: 'primary'
        },
        {
          content: '操作2',
          type: 'default'
        }
      ]
    }
  },
  methods: {
    handleAction(index) {
      console.log('点击了按钮', index);
      // 处理按钮点击事件
    }
  }
}
```


## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-card/components/lime-card -->
<lime-card />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-card` |组件标签|
| `lime-card`| 演示标签|

## Vue2使用说明
main.js中添加以下代码：
```js
// vue2项目中使用
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

详细配置请参考官方文档：[Vue Composition API](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)


## API文档

### Props 属性说明

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | _string_ | - |
| note | 和标题同行的说明文字 | _string_ | - |
| extra | 右侧额外文字 | _string_ | - |
| icon | 左侧图标名称 | _string_ | - |
| image | 左侧图片地址 | _string_ | - |
| cover | 封面图片地址 | _string_ | - |
| more | 是否显示更多图标 | _boolean_ | `false` |
| inset | 是否使用内嵌样式 | _boolean_ | `true` |
| actions | 操作按钮列表 | _Array_ | - |
| actionsAlign | 操作按钮对齐方式，选值：'left'、'right'、'space-between' | _string_ | `'right'` |
| iconColor | 左侧图标颜色 | _string_ | - |
| rightIcon | 右侧图标名称 | _string_ | - |
| rightIconColor | 右侧图标颜色 | _string_ | - |
| iconSize | 左侧图标大小 | _string_ | - |
| rightIconSize | 右侧图标大小 | _string_ | - |
| lStyle | 自定义样式 | _string \| object_ | - |
| imageStyle | 左侧图片样式 | _string \| object_ | - |
| coverStyle | 封面图片样式 | _string \| object_ | - |
| coverMode | 封面图片裁剪、缩放的模式 | _string_ | `'widthFix'` |
| bgColor | 卡片背景色 | _string_ | - |
| headerBordered | 是否显示头部边框 | _boolean_ | `true` |
| footerBordered | 是否显示底部边框 | _boolean_ | `true` |
| lClass | 自定义类名 | _string_ | - |
| lClassLeftIcon | 左侧图标自定义类名 | _string_ | - |
| lClassRightIcon | 右侧图标自定义类名 | _string_ | - |

### coverMode 可选值

| 值 | 说明 |
| --- | --- |
| scaleToFill | 不保持纵横比缩放图片，使图片完全适应 |
| aspectFit | 保持纵横比缩放图片，使图片的长边能完全显示出来 |
| aspectFill | 保持纵横比缩放图片，只保证图片的短边能完全显示出来 |
| widthFix | 宽度不变，高度自动变化，保持原图宽高比不变 |
| heightFix | 高度不变，宽度自动变化，保持原图宽高比不变 |
| top | 不缩放图片，只显示图片的顶部区域 |
| bottom | 不缩放图片，只显示图片的底部区域 |
| center | 不缩放图片，只显示图片的中间区域 |
| left | 不缩放图片，只显示图片的左边区域 |
| right | 不缩放图片，只显示图片的右边区域 |
| top left | 不缩放图片，只显示图片的左上边区域 |
| top right | 不缩放图片，只显示图片的右上边区域 |
| bottom left | 不缩放图片，只显示图片的左下边区域 |
| bottom right | 不缩放图片，只显示图片的右下边区域 |

### Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| action | 点击操作按钮时触发 | _index: number_ |
| getuserinfo | 用户点击该按钮时，会返回获取到的用户信息 | _event: UniEvent_ |
| contact | 客服消息回调 | _event: UniEvent_ |
| getphonenumber | 获取用户手机号回调 | _event: UniEvent_ |
| error | 当使用开放能力时，发生错误的回调 | _event: UniEvent_ |
| opensetting | 在打开授权设置页后回调 | _event: UniEvent_ |
| launchapp | 打开 APP 成功的回调 | _event: UniEvent_ |
| chooseavatar | 获取用户头像回调 | _event: UniEvent_ |
| agreeprivacyauthorization | 用户同意隐私协议事件回调 | _event: UniEvent_ |
| more | 右侧更多事件 | _event: UniEvent_ |

### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 卡片内容 |
| cover | 自定义封面 |
| title | 自定义标题区域 |
| icon | 自定义图标 |
| header-extra | 自定义头部右侧区域 |
| footer | 自定义底部内容 |

### Action 按钮配置

按钮的配置请查看：
- [市场 lime-button](https://ext.dcloud.net.cn/plugin?id=20481)
- [文档 lime-button](/components/button.html)

操作按钮的配置项：

```typescript
interface Action {
  content: string;      // 按钮文本内容
  type?: string;        // 按钮类型，可选值：primary、default等
  block?: boolean;      // 是否为块级元素
  disabled?: boolean;   // 是否禁用
  icon?: string;        // 图标名称
  loading?: boolean;    // 是否显示加载状态
  ghost?: boolean;      // 是否为幽灵按钮
  shape?: string;       // 按钮形状，可选值：rectangle等
  size?: string;        // 按钮大小，可选值：medium等
  variant?: string;     // 按钮变体
  color?: string;       // 按钮颜色
  textColor?: string;   // 文字颜色
  fontSize?: string;    // 文字大小
}
```

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-card-header-line-height` | `$line-height-md` | 卡片标题行高 |
| `--l-card-header-padding-y` | `$spacer` | 卡片头部垂直内边距 |
| `--l-card-header-padding-x` | `$spacer` | 卡片头部水平内边距 |
| `--l-card-body-padding-y` | `$spacer` | 卡片主体垂直内边距 |
| `--l-card-body-padding-x` | `$spacer` | 卡片主体水平内边距 |
| `--l-card-bg-color` | `$bg-color-container` | 卡片背景色 |
| `--l-card-hover-color` | `$gray-1` | 卡片悬停背景色 |
| `--l-card-border-color` | `$border-color-2` | 卡片边框颜色 |
| `--l-card-title-color` | `$text-color-1` | 主标题颜色 |
| `--l-card-title-font-size` | `$font-size-md` | 主标题字体大小 |
| `--l-card-note-color` | `$text-color-3` | 副标题颜色 |
| `--l-card-note-font-size` | `$font-size` | 副标题字体大小 |
| `--l-card-extra-color` | `$text-color-3` | 额外文本颜色 |
| `--l-card-extra-font-size` | `$font-size` | 额外文本字体大小 |
| `--l-card-extra-icon-size` | `$font-size-md` | 额外图标大小 |
| `--l-card-left-icon-color` | `$primary-color` | 左侧图标颜色 |
| `--l-card-left-icon-size` | `$font-size-heading-3` | 左侧图标大小 |
| `--l-card-right-icon-color` | `$text-color-3` | 右侧图标颜色 |
| `--l-card-right-icon-size` | `22px` | 右侧图标大小 |
| `--l-card-image-width` | `48px` | 卡片图片宽度 |
| `--l-card-image-height` | `48px` | 卡片图片高度 |
| `--l-card-inset-margin-x` | `$spacer` | 内嵌卡片水平外边距 |
| `--l-card-inset-margin-y` | `0` | 内嵌卡片垂直外边距 |
| `--l-card-border-radius` | `$border-radius-lg` | 卡片圆角大小 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |