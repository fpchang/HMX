# lime-upload 
文件上传组件，可以选择图片视频等任意文件，支持指定服务或当前uniCloud，兼容uniapp/uniappx   
插件依赖`lime-style`、`lime-shared`、`lime-icon`、`lime-svg`。不喜勿下

## 文档
 🚀 [upload【站点1】](https://limex.qcoon.cn/components/upload.html)
 🌍 [upload【站点2】](https://limeui.netlify.app/components/upload.html)
 🔥 [upload【站点3】](https://limeui.familyzone.top/components/upload.html)



## 安装
插件市场导入即可，首次导入需要重新编译

::: tip 注意🔔 
本插件依赖的[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)是原生插件，如果购买(收费为6元)则需要自定义基座，才能使用！   
若不需要[【lime-svg】](https://ext.dcloud.net.cn/plugin?id=18519)删除即可
:::


## 代码演示
### 基础使用
选择文件会触发 `add` 事件，获取到对应的 file 对象。

```html
<l-upload @add="handleAdd"/>
```
```js
import {UploadFile} from '@/uni_modules/lime-upload';

const handleAdd = (files: UploadFile[])=>{
	console.log(files)
}
```

### 单选
通过设置`max`为`1`,`multiple`为`false`关闭多选，只允许单选

```html
<l-upload :max="1" :multiple="false" v-model="files">
```
```js
import {UploadFile} from '@/uni_modules/lime-upload';
const files = ref<UploadFile[]>([])
```

### 文件预览
通过设置`default-files`或`v-model`可以绑定已经上传的文件列表，并展示文件列表的预览图

```html
<l-upload :column="4" :default-files="files">
```
```js
import {UploadFile} from '@/uni_modules/lime-upload';
const files = ref<UploadFile[]>([{
	url: 'https://img-cdn-tx.dcloud.net.cn/stream/plugin_screens/lime-barcode_0.png',
	name: 'uploaded4.png',
	type: 'image',
}])
```


### 上传状态
通过设置`status`属性可以标识上传状态，`loading`表示上传中,`reload`表示重新上传,`failed`表示上传失败,`done `表示上传完成。`percent`属性表示上传进度

```html
<l-upload :column="4" :default-files="files">
```
```js
import {UploadFile} from '@/uni_modules/lime-upload';
const files = ref<UploadFile[]>([{
	url: 'https://img-cdn-tx.dcloud.net.cn/stream/plugin_screens/lime-tag_0.png',
	name: 'uploaded1.png',
	type: 'image',
	status: 'loading'
},
{
	url: 'https://img-cdn-tx.dcloud.net.cn/stream/plugin_screens/lime-button_0.png',
	name: 'uploaded2.png',
	type: 'image',
	status: 'loading',
	percent: 68,
},
{
	url: 'https://img-cdn-tx.dcloud.net.cn/stream/plugin_screens/lime-color_0.png',
	name: 'uploaded3.png',
	type: 'image',
	status: 'reload',
},
{
	url: 'https://img-cdn-tx.dcloud.net.cn/stream/plugin_screens/lime-barcode_0.png',
	name: 'uploaded4.png',
	type: 'image',
	status: 'failed',
},
{
	url: 'https://img-cdn-tx.dcloud.net.cn/stream/plugin_screens/aff13f50-b9d4-11ee-9303-15d888ed69e8_0.png',
	name: 'uploaded5.png',
	type: 'image',
}])
```


### 禁用
通过设置`disabled`可禁用组件

```html
<l-upload :disabled="true">
```

### 限制上传数量
通过设置`max`可设置上传的数量

```html
<l-upload :column="4" :max="10"></l-upload>
```


### 自定义样式
通过插槽可以自定义选择区域的样式。

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

通过设置`action`指定服务器地址，如果为`uniCloud`则上传到当前绑定的`uniCloud`，设置`autoUpload`为`true`选文件后就立即上传。

```html
<!-- 上传到uniCloud -->
<l-upload action="uniCloud" :autoUpload="true">
<!-- 指定服务器 -->
<l-upload action="//service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo" :autoUpload="true">
<!-- 手动上传 -->
<l-upload v-model="files" @add="handleAdd">
```
```js
import {UploadFile} from '@/uni_modules/lime-upload';

const files = ref<UploadFile[]>([]);

const handleAdd = (files: UploadFile[])=> {
	files.forEach(file =>{
		const task = uni.uploadFile({
		    url: 'https://example.xxx.com/upload', // 仅为示例，非真实的接口地址
		    filePath: file.url,
		    name: 'file',
		    formData: { user: 'test' },
		    success: (res) => {
				file.status = 'done'
				file.url = res.data.url
		        console.log('上传完成')
		    }
		});
		task.onProgressUpdate((res) => {
			file.status = 'loading'
			file.percent = res.progress
		   console.log('上传进度:', res)
		});
	})
}
```


### 查看示例
导入后直接使用这个标签查看演示效果

```html
<!-- // 代码位于 uni_modules/lime-upload/compoents/lime-upload -->
<lime-upload />
```


### 插件标签
`l-upload` 为 component  
`lime-upload` 为 demo




## API

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

| 事件名            | 参数                          | 触发时机                          | 
|-------------------|------------------------------|-----------------------------------|
| **add**           | `(files: UploadFile[])`      | 选择文件后触发（点击上传按钮）       |
| **remove**        | `{ index: number, file: UploadFile }` | 删除文件时触发            |
| **success**       | `(results: UploadResult[])`  | 全部文件上传成功时触发             |
| **fail**          | `(error: Error)`             | 任意文件上传失败时触发             | 
| **click**         | `{ file: UploadFile }`       | 点击文件区域时触发（含预览触发）    | 
| **change**        | `(files: UploadFile[])`      | 文件列表变化时触发（v-model同步）   |

### expose
| 事件名            | 参数                          | 说明                          | 
|-------------------|------------------------------|-----------------------------------|
| **remove**        | `number` |    要删除的文件索引位置         |

```js
const uploadRef = ref<LUploadComponentPublicInstance | null>(null)
// 示例：删除第一个文件
uploadRef.value?.remove(0)
```


### UploadFile
名称 | 类型 | 默认值 | 说明 
-- | -- | -- | -- | --
name | String | - | 文件名称 | 
percent | Number | - | 上传进度 | 
size | Number | - | 文件大小 | 
status | String | - | 文件上传状态：上传成功，上传失败，上传中，等待上传。TS 类型：` 'loading' \| 'reload' \| 'failed' \| 'done'` | 
type | String | - | 文件类型 | 
url | String | - | 文件上传成功后的下载/访问地址 | 
path | String | - | 临时地址 | 


## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。uvue app无效

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
--l-upload-radius | $border-radius | - 
--l-upload-width | 80px | - 
--l-upload-height | 80px | - 
--l-upload-background | $upload-add-bg-color | - 
--l-upload-delete-icon-color | white | - 
--l-upload-add-icon-font-size | 28px | - 
--l-upload-add-bg-color | $gray-1 | - 
--l-upload-add-color | $text-color-4 | - 



## 打赏

如果你觉得本插件，解决了你的问题，赠人玫瑰，手留余香。  
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/alipay.png)
![](https://testingcf.jsdelivr.net/gh/liangei/image@1.9/wpay.png)