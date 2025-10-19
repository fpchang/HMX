# lime-card 卡片组件
一个功能丰富的卡片组件，用于展示内容区块。支持标题、副标题、图标、封面图、自定义操作按钮等多种配置，可用于展示图文信息等多种场景。  
插件依赖`lime-shared`,`lime-style`不喜勿下


## 文档
 🚀 [card【站点1】](https://limex.qcoon.cn/components/card.html)
 🌍 [card【站点2】](https://limeui.netlify.app/components/card.html)
 🔥 [card【站点3】](https://limeui.familyzone.top/components/card.html)



## 安装
插件市场导入即可，首次导入可以需要重新编译


## 代码演示

### 基础用法

```html
 <l-card title="卡片标题"></l-card>
```

### 基础卡片

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

### 带封面图的卡片

```html
 <l-card 
    title="卡片标题" 
    cover="https://example.com/image.jpg"
    coverMode="aspectFill"
  >
    <text>这里是卡片内容</text>
  </l-card>
```

### 带操作按钮的卡片
按钮的配置请查看  
[市场 lime-button](https://ext.dcloud.net.cn/plugin?id=20481)  
[文档 lime-button](/components/button.html)  
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
  }
}
```

## API

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| title | string | - | 卡片标题 |
| note | string | - | 和标题同行的说明文字 |
| extra | string | - | 右侧额外文字 |
| icon | string | - | 左侧图标名称 |
| image | string | - | 左侧图片地址 |
| cover | string | - | 封面图片地址 |
| more | boolean | false | 是否显示更多图标 |
| inset | boolean | true | 是否使用内嵌样式 |
| actions | Array | - | 操作按钮列表 |
| actionsAlign | string | 'right' | 操作按钮对齐方式，可选值：'left'、'right'、'space-between' |
| iconColor | string | - | 左侧图标颜色 |
| rightIcon | string | - | 右侧图标名称 |
| rightIconColor | string | - | 右侧图标颜色 |
| iconSize | string | - | 左侧图标大小 |
| rightIconSize | string | - | 右侧图标大小 |
| imageStyle | string/object | - | 左侧图片样式 |
| coverStyle | string/object | - | 封面图片样式 |
| coverMode | string | 'widthFix' | 封面图片裁剪、缩放的模式 |
| bgColor | string | - | 卡片背景色 |
| headerBordered | boolean | true | 是否显示头部边框 |
| footerBordered | boolean | true | 是否显示底部边框 |
| lClass | string | - | 自定义类名 |
| lClassLeftIcon | string | - | 左侧图标自定义类名 |
| lClassRightIcon | string | - | 右侧图标自定义类名 |

### coverMode 可选值

| 值 | 说明 |
|--------|------|
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

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| action | 点击操作按钮时触发 | index: 操作按钮的索引 |
| getuserinfo | 用户点击该按钮时，会返回获取到的用户信息 | event: UniEvent |
| contact | 客服消息回调 | event: UniEvent |
| getphonenumber | 获取用户手机号回调 | event: UniEvent |
| error | 当使用开放能力时，发生错误的回调 | event: UniEvent |
| opensetting | 在打开授权设置页后回调 | event: UniEvent |
| launchapp | 打开 APP 成功的回调 | event: UniEvent |
| chooseavatar | 获取用户头像回调 | event: UniEvent |
| agreeprivacyauthorization | 用户同意隐私协议事件回调 | event: UniEvent |

### Slots

| 名称 | 说明 |
|------|------|
| default | 卡片内容 |
| cover | 自定义封面 |
| title | 自定义标题区域 |
| icon | 自定义图标 |
| header-extra | 自定义头部右侧区域 |
| footer | 自定义底部内容 |

### Action 按钮配置
[市场 lime-button](https://ext.dcloud.net.cn/plugin?id=20481)  
[文档 lime-button](/components/button.html)  
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


## CSS变量

组件提供了以下CSS变量，可用于自定义样式：

| 变量名 | 默认值 | 说明 |
|--------|------|------|
| --l-card-line-height | var(--l-line-height-md) | 卡片行高 |
| --l-card-header-padding-y | 32rpx | 卡片头部上下内边距 |
| --l-card-header-padding-x | 32rpx | 卡片头部左右内边距 |
| --l-card-body-padding-y | 32rpx | 卡片内容上下内边距 |
| --l-card-body-padding-x | 32rpx | 卡片内容左右内边距 |
| --l-card-bg-color | var(--l-bg-color-container) | 卡片背景色 |
| --l-card-hover-color | var(--l-gray-1) | 卡片悬停颜色 |
| --l-card-border-color | var(--l-border-color-2) | 卡片边框颜色 |
| --l-card-title-color | var(--l-text-color-1) | 卡片标题颜色 |
| --l-card-title-font-size | var(--l-font-size-md) | 卡片标题字体大小 |
| --l-card-note-color | var(--l-text-color-3) | 卡片副标题颜色 |
| --l-card-note-font-size | var(--l-font-size) | 卡片副标题字体大小 |
| --l-card-extra-color | var(--l-text-color-3) | 卡片额外信息颜色 |
| --l-card-extra-font-size | var(--l-font-size) | 卡片额外信息字体大小 |
| --l-card-extra-icon-size | var(--l-font-size-md) | 卡片额外图标大小 |
| --l-card-left-icon-color | var(--l-primary-color) | 卡片左侧图标颜色 |
| --l-card-left-icon-size | 46rpx | 卡片左侧图标大小 |
| --l-card-image-width | 96rpx | 卡片图片宽度 |
| --l-card-image-height | 96rpx | 卡片图片高度 |
| --l-card-right-icon-color | var(--l-text-color-3) | 卡片右侧图标颜色 |
| --l-card-right-icon-size | 44rpx | 卡片右侧图标大小 |

## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)