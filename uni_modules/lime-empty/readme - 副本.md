# lime-empty 空状态
- lime-empty 空状态插件，内置12款使用场景，支持自定义图片及描述。兼容uniapp/uniappx


## 文档
  [empty【站点1】](https://limex.qcoon.cn/components/empty.html)
  [empty【站点2】](https://limeui.netlify.app/components/empty.html)
  [empty【站点3】](https://limeui.familyzone.top/components/empty.html)



## 安装
插件市场导入即可，首次导入可能需要重新编译

## 演示
### 基础使用

```html
<l-empty description="空空如也" />
```

### 图片类型
Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。

```html
<!-- 通用错误 -->
<l-empty image="error" description="出错了" />
<!-- 购物车 -->
<l-empty image="cart" description="购物车空荡荡" />
<!-- 404 -->
<l-empty image="404" description="糟糕,您要访问的页面已丢失" />
<!-- 网络错误 -->
<l-empty image="network" description="网络连接异常" />
<!-- 搜索提示 -->
<l-empty image="search" description="没有找到相关内容" />
<!-- 评论提示 -->
<l-empty image="comment" description="还没有评论,赶紧抢个沙发" />
<!-- 订单提示 -->
<l-empty image="order" description="还没有订单哦" />
<!-- 快递提示 -->
<l-empty image="express" description="还没有快递" />
<!-- 消息提示 -->
<l-empty image="message" description="暂无消息哦" />
<!-- 优惠券提示 -->
<l-empty image="coupon" description="没有优惠券呢" />
<!-- 地址提示 -->
<l-empty image="address" description="您还没填写收货地址哦" />
```

### 自定义大小
通过 `image-size` 属性图片的大小。

```html
<!-- 不指定单位，默认为 px -->
<l-empty image-size="100" description="描述文字" />
<!-- 指定单位，支持 rpx, px -->
<l-empty image-size="10rpx" description="描述文字" />
```

将 `image-size` 设置为数组格式，可以分别设置宽高。数组第一项对应宽度，数组第二项对应高度。

```html
<l-empty :image-size="[60, 40]" description="描述文字" />
```

### 自定义图片
需要自定义图片时，可以在 `image` 属性中传入任意图片 URL。

```html
<l-empty
  image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
  image-size="80"
  description="描述文字"
/>
```

### 底部内容
通过默认插槽可以在 Empty 组件的下方插入内容。

```html
<l-empty description="描述文字">
  <button type="primary" class="bottom-button">按钮</button>
</l-empty>
```


### Vue2使用
- 插件使用了`composition-api`, 如果你希望在vue2中使用请按官方的教程[vue-composition-api](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置
- 关键代码是: 在main.js中 在vue2部分加上这一段即可

```js
// vue2
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片类型，可选值为 `404` `address` `cart` `comment` `coupon` `error` `express` `message` `network` `order` `search`，支持传入图片 URL | _string_ | `default` |
| image-size | 图片大小，默认单位为 `px` | _number \| string \| Array_ | - |
| description | 图片下方的描述文字 | _string_ | - |

## 主题定制
组件提供了下列 CSS 变量，可用于自定义样式。

| 变量名 | 默认值 | 说明 |
|--------|--------|------|
| `--l-empty-opacity` | `1` | 空状态图片的透明度 |
| `--l-empty-padding-x` | `0` | 空状态容器水平内边距 |
| `--l-empty-padding-y` | `$spacer-lg` | 空状态容器垂直内边距 |
| `--l-empty-image-size` | `200px` | 空状态图片的宽度尺寸 |
| `--l-empty-description-margin-top` | `$spacer-md` | 描述文字与图片的上边距 |
| `--l-empty-description-padding-x` | `60px` | 描述文字水平内边距 |
| `--l-empty-description-padding-y` | `0` | 描述文字垂直内边距 |
| `--l-empty-description-color` | `$text-color-3` | 描述文字颜色 |
| `--l-empty-description-font-size` | `$font-size` | 描述文字字号 |
| `--l-empty-description-line-height` | `$line-height` | 描述文字行高 |

## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)