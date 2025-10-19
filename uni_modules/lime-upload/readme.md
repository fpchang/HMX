# lime-upload 文件上传组件
一个功能强大的文件上传组件，支持：
- 图片、视频等多种文件类型上传
- 支持uniCloud和自定义服务器上传
- 多文件选择和预览
- 上传状态和进度显示
- 丰富的自定义选项
- 兼容uniapp/uniappx

> 插件依赖：`lime-style`、`lime-shared`、`lime-icon`、`lime-svg`

## 文档链接
📚 组件详细文档请访问以下站点：
- [文件上传组件文档 - 站点1](https://limex.qcoon.cn/components/upload.html)
- [文件上传组件文档 - 站点2](https://limeui.netlify.app/components/upload.html)
- [文件上传组件文档 - 站点3](https://limeui.familyzone.top/components/upload.html)

## 安装方法
1. 在uni-app插件市场中搜索并导入`lime-upload`
2. 首次导入需要重新编译
3. 在页面中使用`l-upload`组件（组件）或`lime-upload`（演示）

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用，
若不需要删除即可,
:::

### 注意 🔔 
**uniapp app** 如果需要选择所有文件即`mediaType="all"`时，需要[文件选择](https://ext.dcloud.net.cn/plugin?id=17636)，它是原生插件，如果购买(收费为29元)则需要自定义基座，才能使用！


## 代码演示

### 基础使用
选择文件会触发`add`事件，获取到对应的file对象。

```html
<l-upload @add="handleAdd"/>
```

```js
import type { LimeUploadFile} from '@/uni_modules/lime-upload';

const handleAdd = (files: LimeUploadFile[]) => {
    console.log('选择的文件:', files)
}
```

### 单选模式
通过设置`:max="1"`和`:multiple="false"`实现单选。

```html
<l-upload :max="1" :multiple="false" v-model="files">
```

```js
import type {LimeUploadFile} from '@/uni_modules/lime-upload';
const files = ref<LimeUploadFile[]>([])
```

### 文件预览
通过`default-files`或`v-model`绑定已上传文件列表。

```html
<l-upload :column="4" :default-files="files">
```

```js
import type {LimeUploadFile} from '@/uni_modules/lime-upload';
const files = ref<LimeUploadFile[]>([{
    url: 'https://example.com/uploaded.png',
    name: 'uploaded.png',
    type: 'image',
}])
```

### 上传状态
`percent`属性表示上传进度，通过`status`属性显示上传状态：
- `loading`: 上传中
- `reload`: 重新上传
- `failed`: 上传失败
- `done`: 上传完成

```html
<l-upload :column="4" :default-files="files">
```

```js
const files = ref<LimeUploadFile[]>([
    {
        url: 'https://example.com/uploading.png',
        name: 'uploading.png',
        type: 'image',
        status: 'loading',
        percent: 50
    },
    {
        url: 'https://example.com/failed.png',
        name: 'failed.png',
        type: 'image',
        status: 'failed'
    }
])
```

### 禁用状态
通过`disabled`属性禁用上传功能。

```html
<l-upload :disabled="true">
```

### 限制上传数量
通过`max`属性限制上传文件数量。

```html
<l-upload :max="5"></l-upload>
```

### 自定义样式
通过插槽完全自定义上传区域样式。

```html
<l-upload :multiple="false" :column="1" grid-height="200px" add-bg-color="#fff">
	<view style="height: 100%; width: 100%; display: flex; justify-content: center; align-items: center;">
		<image style="width: 100%; height: 100%; position: absolute; opacity: 0.5;" src="https://tdesign.gtimg.com/mobile/demos/upload1.png"></image>
		<view style="width: 72px; height: 72px; background: #e0eefe; border-radius: 99px; display: flex; justify-content: center; align-items: center; position: relative; z-index: 10;">
			<image style="width: 32px; height: 32px;" src="https://tdesign.gtimg.com/mobile/demos/upload3.png" />
		</view>
	</view>
</l-upload>
```

### 上传方式
支持多种上传方式配置：

```html
<!-- 上传到uniCloud -->
<l-upload action="uniCloud" :autoUpload="true">

<!-- 指定服务器 -->
<l-upload action="https://example.com/api/upload" :autoUpload="true">

<!-- 手动上传 -->
<l-upload v-model="files" @add="handleAdd">
```

```js
import type {LimeUploadFile} from '@/uni_modules/lime-upload';

const files = ref<LimeUploadFile[]>([]);

const handleAdd = (files: LimeUploadFile[]) => {
    files.forEach(file => {
        const task = uni.uploadFile({
            url: 'https://example.com/api/upload',
            filePath: file.url,
            name: 'file',
            formData: { user: 'test' },
            success: (res) => {
                file.status = 'done'
                file.url = res.data.url
                console.log('上传成功')
            }
        });
        
        task.onProgressUpdate((res) => {
			// 上传进度监控中特别处理了某些平台可能重复触发100%进度的问题
			if(file.status == 'done') return
            file.status = 'loading'
            file.percent = res.progress
            console.log('上传进度:', res.progress)
        });
    })
}
```

## 快速预览
导入插件后，可以直接使用以下标签查看演示效果：

```html
<!-- 代码位于 uni_modules/lime-upload/components/lime-upload -->
<lime-upload />
```

## 插件标签说明
- `l-upload`：组件标签
- `lime-upload`：演示标签

## Vue2使用说明
本插件使用了`composition-api`，请按照[官方教程](https://uniapp.dcloud.net.cn/tutorial/vue-composition-api.html)配置。

关键配置代码（在main.js中添加）：
```js
// main.js
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
```

## API文档

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 双向绑定值 | _UploadFile[]_ | `-` |
| disabled | 是否禁用文件上传 | _boolean_ | `false` |
| readonly | 只读 | _boolean_ | `false` |
| multiple | 支持多文件上传 | _boolean_ | `true` |
| disabled | 禁用全部操作 | _boolean_ | `false` |
| disablePreview | 是否禁用预览 | _boolean_ | `false` |
| autoUpload | 是否自动上传 | _boolean_ | `false` |
| defaultFiles | 默认列表 | _UploadFile[]_ | `-` |
| imageFit | 预览图裁剪模式，可选值参考小程序`image`组件的`mode`属性 | _string_ | `-` |
| gutter | 格子间隔 | _string_ | `8px` |
| column | 列数 | _string_ | `8px` |
| mediaType | 支持上传的文件类型，图片或视频 `'image'\|'video'\|'media'` | _string_ | `image` |
| maxDuration | 拍摄视频最长拍摄时间，单位秒 | _number_ | `10` |
| sizeType | original 原图，compressed 压缩图 | _string[]_ | `['original','compressed']` |
| sourceType | album 从相册选图，camera 使用相机，默认二者都有 | _string[]_ | `['album', 'camera']` |
| max | 用于控制文件上传数量，值为 0 则不限制 | _number_ | `100` |
| sizeLimit | 图片文件大小限制，默认单位 KB。 | _number_ | `-` |
| uploadIcon | 上传图标[name](https://ext.dcloud.net.cn/plugin?id=14057) | _number_ | `1` |
| uploadIconSize | 上传图标尺寸 | _string_ | `-` |
| gridWidth | 格子宽度 | _string_ | `80px` |
| gridHeight | 格子高度 | _string_ | `80px` |
| gridBgColor | 格子背景色 | _string_ | `-` |
| gridBorderRadius | 格子圆角 | _string_ | `-` |
| addBgColor | 上传格子背景色 | _string_ | `-` |
| loadingText | 上传文本 | _string_ | `-` |
| reloadText | 重新上传文本 | _string_ | `-` |
| failedText | 错误文本 | _string_ | `-` |
| action | 上传地址 如需使用uniCloud服务，设置为uniCloud即可 | _string_ | `-` |
| headers | 请求中其他额外的 form data | _object_ | `-` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| add | 选择文件后触发 | <em>files: LimeUploadFile[]</em> |
| remove | 删除文件时触发 | <em>{ index: number, file: LimeUploadFile }</em> |
| success | 全部文件上传成功时触发 | <em>results: UploadResult[]</em> |
| fail | 任意文件上传失败时触发 | <em>error: Error</em> |
| click | 点击文件区域时触发 | <em>{ file: LimeUploadFile }</em> |

### 方法
通过ref调用组件方法：

```js
const uploadRef = ref(null)

// 删除指定索引的文件
uploadRef.value?.remove(0)
```

### LimeUploadFile类型

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| name | <em>string</em> | 文件名称 |
| url | <em>string</em> | 文件地址 |
| type | <em>string</em> | 文件类型 |
| status | <em>'loading'\|'reload'\|'failed'\|'done'</em> | 上传状态 |
| percent | <em>number</em> | 上传进度(0-100) |
| path | <em>string</em> | 临时地址 |
| size | <em>number</em> | 文件大小 |

## 主题定制

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| `--l-upload-radius` | `$border-radius` | 上传组件边框圆角半径 |
| `--l-upload-width` | `80px` | 上传组件宽度 |
| `--l-upload-height` | `80px` | 上传组件高度 |
| `--l-upload-bg-color` | `$upload-add-bg-color` | 上传组件背景颜色 |
| `--l-upload-delete-icon-color` | `white` | 删除按钮图标颜色 |
| `--l-upload-delete-bg-color` | `$bg-color-mask` | 删除按钮图标背景色 |
| `--l-upload-add-icon-font-size` | `28px` | 添加按钮图标大小 |
| `--l-upload-add-bg-color` | `$gray-1` | 添加按钮背景颜色 |
| `--l-upload-add-color` | `$text-color-4` | 添加按钮文本/图标颜色 |



## 支持与赞赏

如果这个组件对您有帮助，可以考虑支持开发者：

| 支付宝 | 微信支付 |
|--------|--------|
| ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png) | ![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png) |