## 2.0.4（2026-08-10）
- fix: 修复uniapp ios无法显示问题
## 2.0.3（2026-07-23）
- fix: 修复handleViewInit缺少箭头
## 2.0.2（2026-07-21）
- fix: 修复安卓报错问题
## 2.0.1（2026-07-21）
- chored 更新依赖
## 2.0.0（2026-07-21）
- fix: type.ts 添加 @ts-nocheck
- fix: props.ts 添加 @ts-nocheck
- fix: utils.ts 添加 @ts-nocheck
- fix: uvue/vue JSDoc 中 `{string|object}` 改为 `{string|UTSJSONObject}`
- fix: useNative.ts 中 SvpProps 改为 LSvgProps
- fix: useWebView.ts 中 SvpProps 改为 LSvgProps
- fix: 清理 useNative.ts 中的调试日志
## 2.0.1（2026-07-11）
- fix: 修复 iOS 端 WebView load 事件 type 被错误构造为 'error' 的问题
- fix: 修复 downloadFile 失败时未 emit error 事件、错误被静默吞掉的问题
- fix: 修复 formatUrl 单引号检测边界判断（> 0 → != -1）
- fix: 修复 JSDoc 中 LSvpComponentPublicInstance 拼写错误
- perf: 在 onBeforeUnmount 中调用 nativeImage.destroy() 释放原生资源
- chore: 删除未被引用的 useNative.ts、useSvgPath.ts、useWebView.ts、index.scss
- chore: 清理 l-svg.uvue、utils.uts、fileUtils.uts、index.uts 中的注释代码和调试日志
- chore: 删除未使用的 svgRef、onLoadImage 变量
- chore: 重写 demo，uvue 改用 script setup，统一使用 UnoCSS 工具类，修复 URL 空格错误
- docs: 修正 readme 中 click 事件说明，明确各平台触发方式

## 2.0.0（2026-07-11）
- chore: 统一 type.ts / props.ts / .vue / .uvue 四端注释描述，type.ts 作为单一事实来源
- fix: 修复 JSDoc 中 color 默认值（实际为空字符串）与 inherit 默认值（实际为 false）与代码不符的问题
- chore: @tutorial 链接统一使用反引号包裹
- chore: .vue JSDoc 采用 [prop=default] 格式标注默认值，.uvue JSDoc 去除默认值标记
- chore: 对齐 .vue（emits: load/error/click）与 .uvue（defineEmits: load/error）的事件声明与文档
- chore: 按《插件文档规范》重写 readme.md，Props 分类为 基础配置 / 样式与外观 / 行为与交互 / 高级配置，补全 Events、主题定制、暗黑模式、Vue2 使用说明、快速预览、插件标签说明、文档链接、支持与赞赏 等章节
- chore: 移除 readme.md 中不存在的 width / height Props，补充 inherit Prop
## 0.3.4（2026-05-09）
- fix: ios可能因svg有多余换行符，空格导致不显示
## 0.3.3（2026-05-07）
- fix: 修复ios可能存在闪退的问题
## 0.3.2（2026-05-07）
- fix: 修复ios可能闪退的问题
## 0.3.1（2025-12-18）
- fix: 修复上一版缺少url报错
## 0.3.0（2025-12-18）
- chore: 更新报黄的问题
## 0.2.9（2025-12-05）
- fix: 修复uniappx ios频繁切换颜色导致崩溃
## 0.2.8（2025-12-05）
- fix: 修复uniappx ios比较大尺寸的图片引起崩溃问题
## 0.2.7（2025-12-04）
- fix: 修复uniappx ios偏色问题
- feat: 恢复uniappx web模式
## 0.2.6（2025-11-22）
- fix: 修复uniapp 颜色继承的问题
## 0.2.5（2025-11-20）
- chore: 去掉云服务
## 0.2.4（2025-10-11）
- fix: 修复鸿蒙不显示问题
## 0.2.3（2025-09-22）
- feat: 针对hbx4.81优化
## 0.2.2（2025-07-15）
- fix：修复vue2报错问题
## 0.2.0（2025-07-08）
- fix：修复uniapp支付宝小程序报错问题
## 0.1.9（2025-05-23）
- fix：修复安卓部分base64不显示的问题
## 0.1.8（2025-05-13）
- fix：删除ios config多余代码
## 0.1.7（2025-04-21）
- feat：兼容uniappx 鸿蒙next
## 0.1.6（2025-04-04）
- fix：修复安卓color不支持rgba的问题
## 0.1.5（2025-03-12）
- fix：修复安卓src变化没有重新渲染的问题
## 0.1.4（2025-02-14）
- fix：更新事件
## 0.1.3（2025-01-23）
- fix：网图改用downloadFile方式实现
## 0.1.2（2025-01-04）
- chore：更新文档
## 0.1.1（2024-12-09）
- chore：更新文档
## 0.1.0（2024-12-09）
- fix：修复因正则问题导致其它节点不显示（-width）
- feat: 兼容uniappx 微信小程序
## 0.0.9（2024-08-06）
- fix：修复因正则问题导致不显示（-width）
## 0.0.8（2024-08-05）
- fix：修复安卓本地不显示问题
## 0.0.7（2024-07-22）
- chore：更新文档
## 0.0.6（2024-07-22）
- chore：更新文档
## 0.0.5（2024-07-21）
- chore：更新文档
## 0.0.3（2024-07-12）
- fix：修复 缺少 svgDataURLPrefix
## 0.0.2（2024-07-12）
- chore：更新文档
## 0.0.1（2024-06-03）
- init
## 0.01（2023-12-06）
测试
