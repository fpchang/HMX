# lime-empty 空状态组件

一个功能丰富的空状态组件，内置12种常见场景的占位图，支持自定义图片和描述文字。可用于列表为空、网络错误、404页面等多种场景。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [空状态组件文档 - 站点1](https://limex.qcoon.cn/components/empty.html)
- [空状态组件文档 - 站点2](https://limeui.netlify.app/components/empty.html)
- [空状态组件文档 - 站点3](https://limeui.familyzone.top/components/empty.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-empty`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-empty`组件

## 代码演示

### 基础用法
最简单的空状态组件用法，只需要设置描述文字即可。

```html
<l-empty description="空空如也" />
```

### 内置场景
组件内置了12种常见场景的占位图：

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
<!-- 开发中提示 -->
<l-empty image="developing" description="功能正在开发中，敬请期待" />
<!-- 维护中提示 -->
<l-empty image="maintenance" description="系统维护中，请稍后再试" />
```

### 自定义图片
需要自定义图片时，可以在 `image` 属性中传入任意图片 URL。

```html
<l-empty
  image="https://example.com/custom-image.png"
  image-size="80"
  description="描述文字"
/>
```

### 底部内容
通过默认插槽可以在空状态组件的下方插入内容。

```html
<l-empty description="描述文字">
  <button type="primary">刷新</button>
</l-empty>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片类型，可选值为 `404` `address` `cart` `comment` `coupon` `error` `express` `message` `network` `order` `search`，支持传入图片 URL | _string_ | `default` |
| image-size | 图片大小，默认单位为 `px` | _number \| string \| Array_ | - |
| description | 图片下方的描述文字 | _string_ | - |

## 主题定制
组件提供了下列 CSS 变量，可用于自定义样式：

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

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![支付宝](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![微信支付](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |