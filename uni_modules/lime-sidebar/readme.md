# lime-sidebar 侧边导航组件
一个功能丰富的侧边导航组件，用于在不同的内容区域之间进行切换。支持徽标提示、禁用选项、自定义样式等多种配置，可用于分类列表、导航菜单、内容切换等多种场景。组件提供了丰富的自定义选项，可以满足各种复杂的导航设计需求。

> 插件依赖：`lime-shared`、`lime-style`、`lime-badge`

## 文档链接
📚 组件详细文档请访问以下站点：
- [侧边导航组件文档 - 站点1](https://limex.qcoon.cn/components/sidebar.html)
- [侧边导航组件文档 - 站点2](https://limeui.netlify.app/components/sidebar.html)
- [侧边导航组件文档 - 站点3](https://limeui.familyzone.top/components/sidebar.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-sidebar`
2. 导入后可能需要重新编译项目
3. 在页面中使用`l-sidebar`和`l-sidebar-item`组件

## 代码演示

### 基础用法
最简单的侧边导航组件用法，通过 `v-model` 绑定当前选中项的值。

```html
<l-sidebar v-model="active">
  <l-sidebar-item title="标签名称" />
  <l-sidebar-item title="标签名称" />
  <l-sidebar-item title="标签名称" />
</l-sidebar>
```

```js
// setup 语法
const active = ref<string|number>(0);
```

### 徽标提示
设置 `dot` 属性后，会在右上角展示一个小红点；设置 `badge` 属性后，会在右上角展示相应的徽标。

```html
<l-sidebar v-model="active">
  <l-sidebar-item title="标签名称" dot />
  <l-sidebar-item title="标签名称" badge="5" />
  <l-sidebar-item title="标签名称" />
</l-sidebar>
```

### 禁用选项
通过 `disabled` 属性禁用选项。

```html
<l-sidebar v-model="active">
  <l-sidebar-item title="标签名称" />
  <l-sidebar-item title="标签名称" disabled />
  <l-sidebar-item title="标签名称" />
</l-sidebar>
```

### 监听切换事件
设置 `change` 方法来监听切换导航项时的事件。

```html
<l-sidebar v-model="active" @change="onChange">
  <l-sidebar-item title="标签名称" />
  <l-sidebar-item title="标签名称" />
  <l-sidebar-item title="标签名称" />
</l-sidebar>
```

```js
// setup 语法
const active = ref<string|number>(0);
const onChange = (value: number|string) => {
  uni.showToast({
    title: `标签${value}`
  });
};
```


### 圆角样式
通过 `round` 属性设置圆角样式。

```html
<l-sidebar v-model="active" round>
  <l-sidebar-item title="标签名称" />
  <l-sidebar-item title="标签名称" />
  <l-sidebar-item title="标签名称" />
</l-sidebar>
```

### 线条样式
通过 `line` 属性设置线条样式。

```html
<l-sidebar v-model="active" line>
  <l-sidebar-item title="标签名称" />
  <l-sidebar-item title="标签名称" />
  <l-sidebar-item title="标签名称" />
</l-sidebar>
```

### 配合锚点组件
可以与锚点组件配合使用，实现内容区域的快速导航。

```html
<l-sidebar v-model="current" @change="onChange">
  <l-sidebar-item v-for="section in list" :title="section.title" :key="section.title" :value="section.title"/>
</l-sidebar>
<view class="right" style="flex: 1; padding: 0 10px;">
  <l-anchor v-model="current">
    <l-anchor-section v-for="section in list" :name="section.title" :key="section.title">
      <template #header>
        <text class="section-title">{{section.title}}</text>
      </template>
      <view class="section-card" v-for="item in section.children" :key="item">
        <text class="section-card-text">{{item}}</text>
      </view>
    </l-anchor-section>
  </l-anchor>
</view>
```

```js
// setup 语法
const current = ref<string|number>(0);
const onChange = (value: number|string) => {
  console.log('value', value);
};

// 模拟数据
const list = ref([
  { title: '标签1', children: ['内容1', '内容2', '内容3'] },
  { title: '标签2', children: ['内容1', '内容2', '内容3'] },
  { title: '标签3', children: ['内容1', '内容2', '内容3'] }
]);
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-sidebar/components/lime-sidebar -->
<lime-sidebar />
```

## 插件标签说明

| 标签名 | 说明 | 
| --- | --- | 
| `l-sidebar` | 侧边导航容器组件标签 |
| `l-sidebar-item` | 侧边导航项组件标签 |
| `lime-sidebar` | 演示标签 |

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

### Sidebar Props 属性说明

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 当前导航项的索引 | _number \| string_ | `0` |
| width | 侧边导航宽度 | _string_ | - |
| fontSize | 字体大小 | _string_ | - |
| lineHeight | 行高 | _string_ | - |
| textColor | 文本颜色 | _string_ | - |
| disabledTextColor | 禁用文本颜色 | _string_ | - |
| bgColor | 背景色 | _string_ | - |
| selectedFontWeight | 选中文本粗细 | _string_ | - |
| selectedTextColor | 选中文本颜色 | _string_ | - |
| selectedBorderWidth | 选中项左侧边框宽度 | _string_ | - |
| selectedBorderHeight | 选中项左侧边框高度 | _string_ | - |
| selectedBorderColor | 选中项左侧边框颜色 | _string_ | - |
| selectedBgColor | 选中项背景颜色 | _string_ | - |
| round | 是否使用圆角样式 | _boolean_ | `false` |
| line | 是否使用线条样式 | _boolean_ | `false` |

### Sidebar Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 切换导航项时触发 | _value: string \| number_ |

### SidebarItem Props 属性说明

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题内容 | _string_ | - |
| value | 该项的唯一标识符 | _string \| number_ | - |
| dot | 是否显示右上角小红点 | _boolean_ | `false` |
| badge | 图标右上角徽标的内容 | _number \| string_ | - |
| disabled | 是否禁用该项 | _boolean_ | `false` |
| badgeProps | 徽标属性配置 | _object_ | - |

### SidebarItem Events 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击时触发 | _value: string \| number_ |

### SidebarItem Slots 插槽

| 名称 | 说明 |
| --- | --- |
| title | 标题插槽容 |
| default | 默认插槽 |

## 主题定制

组件提供了以下CSS变量，可用于自定义样式：

| 变量名称 | 默认值 | 描述 |
|---------|--------|------|
| `--l-sidebar-width` | `104px` | 侧边导航宽度 |
| `--l-sidebar-height` | `100%` | 侧边导航高度 |
| `--l-sidebar-bg-color` | `$gray-1` | 侧边导航背景色 |
| `--l-sidebar-selected-border-radius` | `10px` | 选中项边框圆角 |
| `--l-sidebar-selected-bg-color` | `$bg-color-container` | 选中项背景色 |
| `--l-sidebar-font-size` | `$font-size` | 字体大小 |
| `--l-sidebar-line-height` | `$line-height` | 行高 |
| `--l-sidebar-text-color` | `$text-color-1` | 文本颜色 |
| `--l-sidebar-disabled-text-color` | `$text-color-4` | 禁用文本颜色 |
| `--l-sidebar-selected-text-color` | `$primary-color` | 选中文本颜色 |
| `--l-sidebar-selected-border-color` | `$primary-color` | 选中项边框颜色 |
| `--l-sidebar-padding-x` | `$spacer-sm` | 水平内边距 |
| `--l-sidebar-padding-y` | `$spacer` | 垂直内边距 |
| `--l-sidebar-selected-border-width` | `4px` | 选中项边框宽度 |
| `--l-sidebar-selected-border-height` | `16px` | 选中项边框高度 |
| `--l-sidebar-selected-font-weight` | `bold` | 选中项文本粗细 |

## 支持与赞赏

如果你觉得本插件解决了你的问题，可以考虑支持作者：

| 支付宝赞助 | 微信赞助 |
|------------|------------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |