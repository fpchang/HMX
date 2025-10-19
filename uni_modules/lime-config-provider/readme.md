# lime-config-provider 全局配置组件
一个功能强大的全局配置组件，用于统一管理LimeUI组件库的主题样式和变量。该组件支持明暗主题切换、自定义主题变量等功能，可以帮助开发者轻松实现应用的主题定制和全局样式管理。作为LimeUI组件库的基础设施，它为所有组件提供统一的主题配置能力，让您的应用界面风格保持一致性。

> 插件依赖：`lime-shared`、`lime-style`

## 文档链接
📚 组件详细文档请访问以下站点：
- [全局配置组件文档 - 站点1](https://limex.qcoon.cn/components/config-provider.html)
- [全局配置组件文档 - 站点2](https://limeui.netlify.app/components/config-provider.html)
- [全局配置组件文档 - 站点3](https://limeui.familyzone.top/components/config-provider.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-config-provider`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-config-provider`组件

## 定制主题

### 介绍
LimeUI 组件库采用丰富的 CSS 变量来组织样式系统，通过覆盖这些 CSS 变量，您可以轻松实现主题定制、动态切换主题等效果，打造独具特色的应用界面。


### 固定色值
在`uni.scss`可以修改绝大多数组件的色值，为什么不是全部? 因为有的组件是基于`canvas`或`drawable`实现。
```scss
// 品牌色-主色
$primary-color: 	#3283ff;
// 错误色
$error-color: 		#FF4D4F;
// 警告色
$warning-color: 	#ffb400;
// 信息色
$info-color: 		#3283ff;
// 成功色
$success-color: 	#34c471;
```



### 使用 CSS Var 进行主题配置
LimeUI 通用的 Design Token 均使用 CSS Variables 声明，您可以直接在根节点样式中覆盖这些 CSS 变量，组件的样式会随之自动更新：
```css
page {
  --l-card-bg-color: #f5f7fa;
}
```

#### 示例
以 Card 组件为例，查看组件的样式，可以看到 `.l-card` 类名上存在以下变量：
```css
.l-card {
	background-color: var(--l-card-bg-color, #fff);
}
```
每个组件的详细页面中都有**主题定制**部分，列出了该组件支持的所有 CSS 变量。  
> 注意：在 uni-app x (app端) 中，CSS 变量支持还不完全，部分变量可能不生效。



### 通过 ConfigProvider 覆盖
将 `l-config-provider` 组件包裹在应用的最外层，可以统一控制其内部所有 LimeUI 组件的主题样式，实现全局主题管理。

```html
<l-config-provider :themeVars="themeVars">
  <view>
    <!-- 这里的所有LimeUI组件将使用自定义主题变量 -->
    <l-card title="我是标题" extra="更多" more>
      <text class="text">这里是卡片内容区域，可以放置任意内容</text>
    </l-card>
    <l-button type="primary">确认按钮</l-button>
  </view>
</l-config-provider>
```

```js
// 在组合式API中
const themeVars = ref({
  // 驼峰命名会自动转换为连字符形式的CSS变量
  cardBgColor: '#f0f2f5',
  primaryColor6: '#1677ff'
})
```



### 深色模式
通过设置 `theme="dark"` 属性来启用深色主题模式，为用户提供护眼的深色体验。

```html
<l-config-provider theme="dark">
  <view class="page">
    <!-- 这里的组件将使用暗色主题 -->
    <l-button>暗色按钮</l-button>
    <l-input placeholder="暗色输入框"></l-input>
    <l-card title="暗色卡片">
      <text>暗色模式下的内容</text>
    </l-card>
  </view>
</l-config-provider>
```

> **注意事项**  
> `l-config-provider` 组件只能影响 LimeUI 组件库的样式，不会自动改变您的自定义组件或页面的文字颜色、背景颜色等。您可以参考以下 CSS 来设置与深色模式匹配的全局样式：

```scss
// 定义变量
$page-bg-color: var(--doc-page-bg-color, #f5f5f5);

// 深色主题下的变量覆盖
.l-theme-dark {
  --doc-card-bg-color: #242424;
  --doc-page-bg-color: #181818;
  --doc-title-color: rgba(255, 255, 255, 0.9);
  --doc-summary-color: rgba(255, 255, 255, 0.6);
  --doc-text-color: rgba(255, 255, 255, 0.8);
}

// 应用到页面
.page {
  background-color: $page-bg-color;
  color: var(--doc-text-color, #333);
  transition: background-color 200ms, color 200ms;
}
```



### 动态切换主题
结合响应式数据和事件处理，可以实现主题的动态切换功能，让用户自由选择喜欢的界面风格。

```html
<l-config-provider :theme="currentTheme" :themeVars="themeVars">
  <view class="page">
    <l-button type="primary" @click="toggleTheme">
      {{ currentTheme == 'light' ? '切换到深色模式' : '切换到浅色模式' }}
    </l-button>
    
    <!-- 其他组件 -->
    <l-card title="动态主题演示">
      <text>点击上方按钮切换主题</text>
    </l-card>
  </view>
</l-config-provider>
```

```js
const currentTheme = ref('light')
const themeVars = ref({})

const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
    
    // 根据主题同时更新自定义变量
    if (currentTheme.value === 'dark') {
        themeVars.value = {
            // 暗色主题变量
            primaryColor: '#177ddc',
            textColor1: 'rgba(255, 255, 255, 0.85)',
            cardBgColor: '#1f1f1f',
        }
    } else {
        themeVars.value = {
            // 浅色主题变量
            primaryColor: '#1677ff',
            textColor1: 'rgba(0, 0, 0, 0.88)',
            cardBgColor: '#ffffff',
        }
    }
}
```


## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-config-provider` | 组件标签，用于实际开发中 |
| `lime-config-provider` | 演示标签，用于快速预览组件效果 |

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
| theme | 主题风格，设置为 dark 来开启深色模式，全局生效 | _'light' \| 'dark'_ | `'light'` |
| themeVars | 自定义主题变量对象，属性名使用驼峰命名法 | _object_ | `{}` |
| lClass | 自定义根节点的 class 名称 | _string_ | - |
| lStyle | 自定义根节点的样式 | _string \| object_ | - |



### Slots 插槽

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽，放置需要应用主题配置的所有内容 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |