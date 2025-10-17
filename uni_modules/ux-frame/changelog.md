## 3.2.1（2025-09-23）
1. 优化[ux-modal](https://www.uxframe.cn/component/modal.html)弹框组件，新增`confirmTheme`、`cancelTheme`参数，控制按钮主题
2. 优化[ux-navbar](https://www.uxframe.cn/component/navbar.html)顶部导航组件，新增`gobackIcon`、`gobackSize`参数，自定义返回按钮图标
3. 优化[ux-button](https://www.uxframe.cn/component/button.html)按钮组件，新增`afterText`参数，控制icon在文字之后显示
4. 优化[ux-icon](https://www.uxframe.cn/component/icon.html)图标组件，新增`xstyle`参数，自定义公共样式
5. 优化[ux-list](https://www.uxframe.cn/component/list.html)列表容器组件，新增`xstyle`参数，自定义公共样式
6. 优化[ux-empty](https://www.uxframe.cn/component/empty.html)空状态组件，新增`space`参数，控制文案和图片之间的距离
7. 优化[ux-form-item](https://www.uxframe.cn/component/form.html)表单组件，新增`showLabel`、`showError`参数，控制名称和错误信息的显示
8. 修复[ux-picker](https://www.uxframe.cn/component/picker.html)选择器组件文字不能居中显示的问题
9. 修复[ux-datepicker](https://www.uxframe.cn/component/datepicker.html)日期选择器组件文字不能居中显示的问题
## 3.2.0（2025-07-24）
1. 【重要】支持试用云编译！
2. 删除一些多余的组件，解决云编译成功后运行失败的bug
## 3.1.9（2025-07-24）
1. 【重要】支持试用云编译！
2. 新增[ux-view](https://www.uxframe.cn/component/view.html)容器组件，适配深色模式
3. 优化[ux-modal](https://www.uxframe.cn/component/modal.html)拆分`theme`参数为`confirmTheme`和`cancelTheme`两个参数, 分别控制2个按钮的样式
## 3.1.8（2025-07-17）
1. 修复Android端编译失败问题
## 3.1.7（2025-07-15）
1. 【重要】原生鸿蒙版本上线啦～ 最低支持 HBX4.66版本，如果低于此版本请升级!
2. 优化[ColorUtil](https://www.uxframe.cn/api/color.html)重写颜色工具类以适配鸿蒙，如果用到此工具请适配！
3. 优化[DateUtil](https://www.uxframe.cn/api/date.html)重写日期工具类以适配鸿蒙，如果用到此工具请适配！
4. 优化[ux-icon](https://www.uxframe.cn/component/icon.html),为支持全端加载，组件内部不再加载字体，请在`App.uvue`里加载字体库
5. 优化[ux-icon](https://www.uxframe.cn/component/icon.html),删除`custom`、`customFont`、`customFamily`参数，新增`fontFamily`参数
6. 修复[ux-form](https://www.uxframe.cn/component/form.html)在小程序端执行`submit`报错的问题
7. 修复其他一些问题
## 3.1.6（2025-04-23）
1. 修复web端深色模式无效问题
2. 修复[ux-indexbar](https://www.uxframe.cn/component/indexbar.html)web端布局异常问题
3. 优化[ux-indexbar](https://www.uxframe.cn/component/indexbar.html)新增`fixed`参数，侧边滑块支持`fixed`和`absolute`定位模式
## 3.1.5（2025-04-22）
1. 【预告】六月份将上架原生鸿蒙版本！
2. 【重要】适配`hbx4.62+`，修复`hbx4.62+`编译失败的问题；优化Demo案例，更清爽美观！
3. 【重要】删除[ux-chart](https://www.uxframe.cn/component/f2.html)F2图表组件，请切换[ux-echarts](https://www.uxframe.cn/component/echarts.html)Echarts图表使用
4. 【重要】删除[request](https://www.uxframe.cn/api/request.html)请求库，推荐使用[kux-flector](https://ext.dcloud.net.cn/plugin?id=22991)请求库
5. 【重要】删除[router](https://www.uxframe.cn/api/router.html)路由库，推荐使用[kux-router](https://ext.dcloud.net.cn/plugin?id=15998)路由库
6. 【重要】分离原生插件[ux-plus](https://www.uxframe.cn/api/plus.html), 框架不再依赖`ux-plus`
7. 新增APP`启动图`PSD资源，android支持.9.png, ios支持Storyboard，替换背景图片即可
8. 新增[文件选择器](https://www.uxframe.cn/template/files.html)模版，仅支持Android
9. 新增[APP更新](https://www.uxframe.cn/template/upgrade.html)模版，删除`ux-upgrade`组件
10. 新增[隐私协议](https://www.uxframe.cn/template/privacy.html)模版
11. 新增[doc-gen](https://www.uxframe.cn/conf/doc.html) vite插件，支持高度自定义，可快速生成自家组件的md文档
12. 原生库[ux-plus](https://www.uxframe.cn/api/plus.html)新增复制粘贴、退出APP等api，分离部分组件和api成独立插件
13. 新增[ux-mqtt](https://www.uxframe.cn/api/mqtt.html)原生MQTT插件，支持Android、iOS、Web
14. 新增[ux-soter](https://www.uxframe.cn/api/soter.html)原生生物认证插件，支持Android、iOS
15. 新增[ux-orm](https://www.uxframe.cn/api/orm.html)原生ORM插件，支持通过链式调用实体对象，零SQL对本地数据库进行增删改查
16. 新增[ux-sqlite](https://www.uxframe.cn/api/sqlite.html)原生Sql插件，支持Android、iOS，可对本地数据库进行增删改查
17. 新增[ux-files](https://www.uxframe.cn/api/files.html)原生文件管理插件，支持Android、iOS、Web，仅Android支持文件搜索
18. 新增[ux-share](https://www.uxframe.cn/api/share.html)系统分享，支持Android、iOS
19. 新增[ux-douyin](https://www.uxframe.cn/api/douyin.html)抖音SDK，支持抖音授权登录分享SDK，暂时仅支持Android，后续支持iOS
20. 新增[ux-storekit](https://www.uxframe.cn/api/storekit.html)插件，支持ios应用内评分，app跳转应用市场
21. 新增[ux-network](https://www.uxframe.cn/api/network.html)网络状态监听插件
22. 新增[ux-permission](https://www.uxframe.cn/api/permission.html)APP权限申请提示插件
23. 新增[ux-notification](https://www.uxframe.cn/api/notification.html)通知栏下载进度插件
24. 新增[ux-pinyin](https://www.uxframe.cn/api/pinyin.html)汉字转拼音插件
25. 新增[ux-camera-view](https://www.uxframe.cn/component/camera-view.html)自定义相机预览拍照组件，支持Android、iOS
26. 新增[ux-movable](https://www.uxframe.cn/component/movable.html)纯原生拖拽组件，解决unix没有好用的拖拽组件痛点
27. 删除[ux-drag](https://www.uxframe.cn/component/swiper-stack.html)组件，请使用[ux-movable](https://www.uxframe.cn/component/movable.html)替代
28. 新增[ux-shimmer](https://www.uxframe.cn/component/shimmer.html)原生辉光组件，可用于骨架屏等场景，支持Android、iOS、Web、MP
29. 新增[ux-lottie](https://www.uxframe.cn/component/lottie.html)原生lottie动画组件，支持Android、iOS、Web
30. 新增[ux-blur](https://www.uxframe.cn/component/blur.html)原生高斯模糊组件，支持Android、iOS、Web
31. 新增[ux-sprite](https://www.uxframe.cn/component/sprite.html)原生精灵图动画组件，支持Android、iOS、Web
32. 新增[ux-svg](https://www.uxframe.cn/component/svg.html)原生svg组件，支持Android，后续支持iOS
33. 新增[ux-chart-bar](https://www.uxframe.cn/component/chart-bar.html)自绘Canvas柱状图表，支持全端
34. 新增[ux-chart-line](https://www.uxframe.cn/component/chart-bar.html)自绘Canvas折线图表，支持全端
35. 新增[ux-chart-ring](https://www.uxframe.cn/component/chart-bar.html)自绘Canvas环形图表，支持全端
36. 新增[ux-tree](https://www.uxframe.cn/component/tree.html)树节点组件，支持无限嵌套，支持异步加载
37. 新增[ux-virtual-list](https://www.uxframe.cn/component/virtual-list.html)虚拟列表组件，解决一次性加载大量列表导致内存溢出的问题
38. 新增[ux-swiper](https://www.uxframe.cn/component/swiper.html)swiper组件，支持左右滑动堆叠效果
39. 优化[ux-indexbar](https://www.uxframe.cn/component/indexbar.html)新增`otherIcon`、`activeFontColor`、`indicateSize`参数，支持自定义`#`图标样式
40. 优化[ux-noticebar](https://www.uxframe.cn/component/noticebar.html)新增`size`参数，支持修改内容大小，新增左右`left-icon`、`right-icon`左右图标插槽
41. 优化[ux-modal](https://www.uxframe.cn/component/modal.html)新增`titleStyle`、`contentStyle`、`confirmStyle`、`cancelStyle`参数，自定义cell样式
42. 优化[ux-tabbar](https://www.uxframe.cn/component/tabbar.html)新增`roll`左右滚动动画效果
43. 优化[ux-drawer](https://www.uxframe.cn/component/drawer.html)新增`intercept-back`参数，支持拦截页面返回
44. 优化[ux-upload](https://www.uxframe.cn/component/upload.html)新增`upload`插槽，支持替换新增按钮样式
45. 优化[ux-upload](https://www.uxframe.cn/component/upload.html)新增`beforeUpload`上传前钩子，支持覆盖`formData`参数
46. 优化[ux-radio](https://www.uxframe.cn/component/radio.html)新增`border`、`titleStyle`、`cellPadding`参数，自定义cell样式
47. 优化[ux-countdown](https://www.uxframe.cn/component/countdown.html)新增`reverse`参数，支持反向正计时
48. 修复[ux-indexbar](https://www.uxframe.cn/component/indexbar.html)侧边滑块位置不一致的问题
49. 修复[ux-radio](https://www.uxframe.cn/component/radio.html)组件checked默认值可能不生效的问题
50. 修复[ux-tabs](https://www.uxframe.cn/component/tabs.html)下划线不居中的问题
51. 修复[ux-store](https://www.uxframe.cn/api/store.html)线程占用问题
## 3.1.4（2025-01-08）
1. 修复一些bugs
## 3.1.3（2025-01-03）
1. 【重要】微信小小程序版本上线啦～ 最低支持 HBX4.44版本，如果低于此版本请升级!
2. 【重要】多端适配！本框架现已支持`uniappx - android`、`uniappx - ios`、`uniappx - web`、`uniappx - 微信小程序`、 `uniapp - web`等5端编译平台
3. 【预告】后续版本将持续支持`uniappx - 鸿蒙`、`uniapp - 鸿蒙`、`uniapp - android`、`uniapp - ios`、`uniapp - 微信小程序`、`uniapp - nvue`等6端编译平台
4. 【重要】所有组件的尺寸参数默认类型改为Any，支持带单位，例如：`:size="20"`、`size="20%"`、`size="20px"`、`size="20rpx"`
5. 【重要】更改了框架安装方式，新的安装方式请参考[安装说明](https://www.uxframe.cn/frame/quickstart.html)适配
6. 原生库[ux-plus](https://www.uxframe.cn/api/plus.html)新增openWeb功能，支持应用内原生弹窗的形式打开网页
7. 新增[ux-echarts](https://www.uxframe.cn/component/echarts.html)图表组件
8. 新增[ux-sticky-section](https://www.uxframe.cn/component/sticky-section.html)吸顶布局组件，作为官方未适配小程序的补充
9. 新增[ux-sticky-header](https://www.uxframe.cn/component/sticky-header.html)吸顶布局组件，作为官方未适配小程序的补充
10. 新增[ux-movable-area](https://www.uxframe.cn/component/movablearea.html)拖动区域组件，作为官方还未支持APP端movable-area组件的补充, 功能与官方组件对齐
11. 优化[全局配置](https://www.uxframe.cn/conf/conf.html)，删除`unit`字段，框架内默认单位为px，内部会根据设备屏幕宽度进行相应的缩放，以适配不同的屏幕尺寸
12. 优化[全局配置](https://www.uxframe.cn/conf/conf.html)，新增`customFont`、`customFamily`参数，当`ux-icon`组件设置`custom=true`时有效，自定义图标库无需每个都要写路径了
13. 优化[ux-list](https://www.uxframe.cn/component/list.html)，`uniapp`版本支持虚拟列表
14. 优化[ux-waterfall](https://www.uxframe.cn/component/waterfall.html)改版，对齐官方的瀑布流组件以适配多端，如果您用到此组件，请按文档调整
15. 优化[ux-guide](https://www.uxframe.cn/component/other/guide.html)，删除notreach事件，新增scroll事件，如果您用到此组件，请按文档调整
16. 优化[ux-icon](https://www.uxframe.cn/component/icon.html)新增`custom`字段，需配合全局配置中的`customFont`、`customFamily`使用
17. 优化[ux-icon](https://www.uxframe.cn/component/icon.html)新增`global`字段，任意地方加载一次，全局生效
18. 优化[ux-navbar](https://www.uxframe.cn/component/navbar.html)新增`blurAlpha`，删除`blurColor`参数
19. 优化[ux-tabbar](https://www.uxframe.cn/componentbar.html)新增`blurAlpha`，删除`blurColor`参数
20. 优化[ux-input](https://www.uxframe.cn/component/input.html)新增`disabledColor`、`disabledDark`参数，自定义输入框禁用颜色
21. 优化[ux-input](https://www.uxframe.cn/component/input.html)新增`borderColor`、`borderColorDark`参数，自定义输入框边框颜色
22. 优化[ux-input](https://www.uxframe.cn/component/input.html)新增`borderRadius`参数，自定义输入框圆角
23. 优化[ux-input](https://www.uxframe.cn/component/input.html)新增`size-type`参数，自定义显示大中小字体
24. 优化[ux-input](https://www.uxframe.cn/component/input.html)新增`focus-border`参数，控制聚焦时是否显示边框
25. 优化[ux-textarea](https://www.uxframe.cn/component/textarea.html)新增`disabledColor`、`disabledDark`参数，自定义输入框禁用颜色
26. 优化[ux-textarea](https://www.uxframe.cn/component/textarea.html)新增`borderColor`、`borderColorDark`参数，自定义输入框边框颜色
27. 优化[ux-textarea](https://www.uxframe.cn/component/textarea.html)新增`focus-border`参数，控制聚焦时是否显示边框
28. 优化[ux-datepicker](https://www.uxframe.cn/component/datepicker.html)新增`hourminute`、`datehour`选择模式
29. 优化[ux-navbar](https://www.uxframe.cn/component/navbar.html)新增`background`支持背景图
30. 优化[ux-tabbar](https://www.uxframe.cn/componentbar.html)新增`onTab`、`onCenter`函数
31. 优化[ux-text](https://www.uxframe.cn/component/text.html)新增`size-type`参数，自定义显示大中小字体
32. 优化[ux-button](https://www.uxframe.cn/component/button.html)新增`size-type`参数，自定义显示大中小字体
33. 优化[ux-button](https://www.uxframe.cn/component/button.html)新增`width`、`height`参数，自定义按钮大小
34. 优化[ux-colorpicker](https://www.uxframe.cn/component/colorpicker.html)新增`colors`参数，自定义预设颜色值
35. 优化[ux-radio](https://www.uxframe.cn/component/radio.html)新增`checkedColor`、`checkedColorDark`参数，自定义选择颜色
36. 修复[ux-drag](https://www.uxframe.cn/component/drag.html)排序异常问题，并且支持竖向拖拽排序且支持拖动到列表边缘自动滚动列表功能
37. 修复[ux-navbar](https://www.uxframe.cn/component/navbar.html)Web端模糊异常问题
38. 修复[ux-tabbar](https://www.uxframe.cn/componentbar.html)Web端模糊异常问题
## 3.1.2（2024-09-12）
1. 新增[setGray](https://www.uxframe.cn/api/plus.html) api，支持`哀悼模式`(全局置灰)
2. 新增[shareWithSystem](https://www.uxframe.cn/api/plus.html) api，支持调用系统分享功能
3. 新增[setRequestPermissionTips](https://www.uxframe.cn/api/plus.html) api，可设置申请权限的提示说明
4. 新增[requestPermissions](https://www.uxframe.cn/api/plus.html) api，支持权限申请
5. 新增[openAppAuthorizeSetting](https://www.uxframe.cn/api/plus.html) api，支持打开app权限设置
6. 新增[hideKeyboard](https://www.uxframe.cn/api/plus.html) api，支持隐藏键盘
7. 新增[ux-apng](https://www.uxframe.cn/component/other/apng.html)序列帧动画组件
8. 新增[ux-blur](https://www.uxframe.cn/component/blur.html)高斯模糊组件
9. 新增[ux-richtext](https://www.uxframe.cn/component/richtext.html)富文本组件
10. 新增[ux-empty](https://www.uxframe.cn/component/empty.html)空状态组件
11. 优化[ux-card](https://www.uxframe.cn/component/card.html)支持高斯模糊背景
12. 优化[ux-drawer](https://www.uxframe.cn/component/drawer.html)支持高斯模糊背景
13. 优化[ux-modal](https://www.uxframe.cn/component/modal.html)支持高斯模糊背景
14. 优化[ux-overlay](https://www.uxframe.cn/component/overlay.html)支持高斯模糊背景
15. 优化[ux-popover](https://www.uxframe.cn/component/popover.html)支持高斯模糊背景
16. 优化[ux-actionsheet](https://www.uxframe.cn/component/actionsheet.html)支持高斯模糊背景
17. 优化[ux-navbar](https://www.uxframe.cn/component/navbar.html)支持高斯模糊背景
18. 优化[ux-tabbar](https://www.uxframe.cn/componentbar.html)支持高斯模糊背景
19. 优化[ux-icon](https://www.uxframe.cn/component/icon.html)新增一些常用图标
20. 优化[ux-button](https://www.uxframe.cn/component/button.html)新增`colors`、`gradientDirection`渐变色和方向参数
21. 优化[ux-navbar](https://www.uxframe.cn/component/navbar.html)新增`gradientDirection`渐变色方向参数
22. 优化[ux-navbar](https://www.uxframe.cn/component/navbar.html)当Web刷新页面之后，路由栈只有当前页面路由，此时点击返回可以直接返回首页
23. 优化[ux-upgrade](https://www.uxframe.cn/component/other/upgrade.html)页面样式
24. 优化[ux-countto](https://www.uxframe.cn/component/countto.html)新增`format`参数，支持格式化数字金额显示
25. 优化`全局配置`新增`uptSystemStyle`参数控制是否修改系统全局样式，例：backgroundColorContent、backgroundColor、navigationBarColor、tabBarStyle等系统样式
26. 修复全局配置修改后无法持久化保存的问题
27. 修复[ux-icon](https://www.uxframe.cn/component/icon.html)自定义图标库不显示的问题
28. 修复[ux-tabs](https://www.uxframe.cn/components.html)横屏进入闪退的问题
29. 修复[ux-tabs](https://www.uxframe.cn/components.html)动态修改单个属性不生效的问题
30. 修复[ux-image](https://www.uxframe.cn/component/image.html) loading动画不居中的问题
31. 修复[ux-colorpicker](https://www.uxframe.cn/component/colorpicker.html)深色模式下配色问题
32. 修复[ux-chatlist](https://www.uxframe.cn/component/chatlist.html)演示demo聊天内容异常显示和输入框顶出navbar的问题
33. 修复[ux-slider](https://www.uxframe.cn/component/slider.html)切换主题导致进度重置的问题
34. 修复[ux-input](https://www.uxframe.cn/component/input.html)动态切换focus不生效的问题
35. 修复[ux-textarea](https://www.uxframe.cn/component/textarea.html)动态切换focus不生效的问题
36. 修复[ux-waterfall](https://www.uxframe.cn/component/waterfall.html)高度异常问题
37. 修复[ux-card](https://www.uxframe.cn/component/card.html)边框不能动态显隐问题
## 3.1.1（2024-08-27）
1. 【重要】最低支持hbx4.26，不兼容4.26以下版本
2. 新增[toolkit](https://www.uxframe.cn/libs/toolkit.html)工具集
3. 修复`普通授权加密版`无法试用的问题，hbx需升级到4.26版本
4. 修复[ux-indexbar](https://www.uxframe.cn/component/indexbar.html)存在#符号异常问题，请使用OTHER代替#，插件内部会转换成#显示
5. 修复[ux-picker](https://www.uxframe.cn/component/picker.html)在android端异常白屏的问题
6. 修复[ux-navbar](https://www.uxframe.cn/component/navbar.html)浅色模式下下边框看不见的问题
7. 修复[ux-swipeaction](https://www.uxframe.cn/component/swipeaction.html)新增click事件解决Android端滑动的时候会触发内部按钮点击的问题
8. 修复[ux-input](https://www.uxframe.cn/component/input.html)suffixStyle属性不起作用的问题
9. 修复[ux-upload](https://www.uxframe.cn/component/upload.html)手动上传时没有删除按钮的问题
10. 优化[ux-colorpicker](https://www.uxframe.cn/component/colorpicker.html)打开性能问题
11. 优化[ux-floatbutton](https://www.uxframe.cn/component/floatbutton.html)新增offset-x,offset-y参数，可单独配置xy轴偏移
12. 优化[ux-modal](https://www.uxframe.cn/component/modal.html)新增title和content插槽，可自定义内容
13. 优化[ux-modal](https://www.uxframe.cn/component/modal.html)居中弹出动画形式，更细腻了
14. 优化[ux-radio](https://www.uxframe.cn/component/radio.html)新增radius参数，可控制radio直径大小
## 3.1.0（2024-07-29）
1. 新增[ux-cloud](https://www.uxframe.cn/cloudfun/cloud.html)云函数库，目前支持版本更新等功能，更多功能持续集成中...
2. 新增[ux-plus](https://www.uxframe.cn/api/plus.html)原生插件库，对齐目标html5plus，目前已有拨打电话、打开链接、震动、创建通知栏进度条等功能，更多功能持续集成中...
3. 新增[i18n](https://www.uxframe.cn/libs/i18n.html)国际化功能，默认支持中、英、日、韩四国语言
4. 新增[原子化CSS库](https://www.uxframe.cn/conf/css.html)，即时原子化CSS框架，让你省去手写样式的烦恼
5. 新增[request](https://www.uxframe.cn/libs/request.html)请求库，支持请求同步/异步拦截、请求重试、请求过滤等功能
6. 新增[router](https://www.uxframe.cn/libs/router.html)路由库，完全对齐 vue-router 的API设计用法，支持多种导航守卫、应用启动拦截守卫、路由返回守卫、异步拦截守卫
7. 新增[ux-router](https://www.uxframe.cn/component/other/router.html)路由组件
8. 新增[ux-upload](https://www.uxframe.cn/component/upload.html)上传组件，支持图片视频、支持宫格、单行滚动显示，支持手动提交上传
9. 新增[ux-upgrade](https://www.uxframe.cn/component/other/upgrade.html)更新组件，支持ios、android、web整包更新，支持后台下载、支持跳转市场更新
10. 新增[全局配置](https://www.uxframe.cn/conf/conf.html)相关深色颜色字段，若不设置则自动推导对应颜色的反色
11. 优化[主题](https://www.uxframe.cn/conf/conf.html)配色，使其更有层次感
12. 优化[ux-table](https://www.uxframe.cn/componentle.html)新增固定列功能、触底加载功能
13. 优化[ux-picker](https://www.uxframe.cn/component/picker.html)确定和取消按钮样式
14. 优化[ux-datepicker](https://www.uxframe.cn/component/datepicker.html)确定和取消按钮样式
15. 优化[ux-colorpicker](https://www.uxframe.cn/component/colorpicker.html)确定和取消按钮样式
16. 修复[ux-picker](https://www.uxframe.cn/component/picker.html)默认选中可能不准确的问题
17. 修复[ux-collapse](https://www.uxframe.cn/component/collapse.html)展开动画效果不正常的问题
18. 修复[ux-keyboard](https://www.uxframe.cn/component/keyboard.html)多次点击可能打不开的问题
19. 修复[ux-keyboard](https://www.uxframe.cn/component/keyboard.html) ios端车牌键盘输入闪烁的问题
20. 修复[ux-modal](https://www.uxframe.cn/component/modal.html) ios端表现异常问题
21. 修复[ux-total](https://www.uxframe.cn/component/toast.html) ios端表现异常问题
22. 修复[ux-tabbar](https://www.uxframe.cn/componentbar.html)特殊情况下无法点击按钮的问题
23. 修复[ux-waterfall](https://www.uxframe.cn/component/waterfall.html)android端图片高度自适应异常的问题
24. 修复部分组件参数等于0时无效的问题
25. 修复优化其他若干问题
## 3.0.9（2024-07-05）
1. 修复授权加密版本`android`无法打自定义基座的问题
## 3.0.8（2024-06-27）
1. 新增`ux-form`表单组件
2. 优化`ux-radio`支持是否可反选
3. 修复`web canvas`部分浏览器不兼容问题
## 3.0.7（2024-06-26）
1. 【重要】插件支持自身加密，现在可以免费试用插件了，最低支持`hbx 4.21-alpha`版本，低于`4.21-alpha`版本请升级版本！
2. 【重要】外部导入插件内部资源，只能使用`@/uni_modules/ux-frame`此种方式导入，请适配导入方式
3. 【重要】统一内部Type以`Ux`作为前缀，请适配部分`UX`为`Ux`
4. 新增`ux-colorpicker`颜色选择器组件
5. 新增`ux-keyboard`键盘组件
6. 新增`ux-swipeaction`滑动操作栏组件
7. 新增`ux-actionsheet`底部操作栏组件
8. 新增`ux-modal`对话框组件
9. 新增`ux-toast`、`ux-toast-item`消息提示框组件
10. 新增`ux-watermark`水印组件
11. 优化`ux-drag`支持拖拽到边界自动滚动显示（ios不支持）
12. 修复`ux-drag`拖拽抖动问题
13. 修复`ux-signature`Web端无法签字问题
14. 修复`ios`系统不能监听主题变化问题
15. 修复状态栏文字颜色不能随主题变换的问题
16. 修复`hbx 4.21-alpha`引出的web端canvas相关组件失效的问题
17. 修复其他若干Bug
## 3.0.6（2024-06-03）
1. 修复`ux-pages`切换页面返回后不能保存页面状态的问题
2. 重要优化`ux-tabbar`复杂页面切换延迟卡顿的问题
3. 优化ios端一些显示问题
## 3.0.5（2024-06-01）
1. 新增`ux-threejs`全景图组件
2. 新增`ux-floatbutton`悬浮按钮组件
## 3.0.4（2024-05-28）
1. 新增`ux-waterfall`瀑布流组件
2. 新增`ux-chatlist`聊天倒序加载列表组件
3. 新增`ux-indexbar`索引导航组件
4. 新增`ux-sidebar`侧边栏导航组件
5. 新增`ux-anchortabs`锚点选项卡组件
6. `install`新增`debug`参数解决去不掉debug打印的问题
## 3.0.3（2024-05-20）
1. 新增`ux-tags`选项卡组件，支持多种效果
2. 优化`ux-guide`引导组件，支持滚动到锚点
3. 优化`ux-icon`图标组件
4. 删除`ux-icons`2000+图标组件，影响性能
## 3.0.2（2024-05-16）
1. 新增`ux-guide`引导组件，支持动画效果
4. 修复`ux-input`默认值不显示的问题
## 3.0.1（2024-05-12）
1. 新增`ux-table`表格组件，支持多种主题自定义、高亮、边框、斑马纹、序号、全选、单选、编辑、合计、加载状态等多种功能
2. 新增`sm4`加密解密API，支持CBC模式
3. 优化`ux-radio`单选组件，新增`checked`、`readonly`参数
4. 修复`ux-grid`可能影响其他组件布局的问题
5. 修复`ux-radio-group`可能影响其他组件布局的问题
6. 修复hbx4.16引出的安卓端`ux-cell`内容不居中的问题
## 3.0.0（2024-05-07）
1. 所有组件已完成`Vue3 setup`重构
2. 支持`android`、`ios`、`web` 三端，适配长屏、宽屏、PC、折叠屏、横屏
3. 适配`深色模式`，可自由切换主题，内置字体大小、单位、强调色、背景色、文字颜色、内边距、外边距、圆角等20+项全局配置
## 1.0.7（2024-04-08）
1. 适配hbx 4.11版本
2. 支持编译到 android、web 平台
## 1.0.6（2024-03-28）
1. 支持 `setup` 模式
2. 支持编译到 `ios`、`android`、`web` 3大平台
## 1.0.5（2024-01-28）
1. 兼容 4.0，组件`ux-scroll` `ux-list` 新增 `direction`参数 废弃`scroll-x` `scroll-y`参数,
## 1.0.4（2024-01-23）
1. 新增`ux-countdown`倒计时组件
2. 新增`ux-skeleton`骨架屏组件
3. 新增`ux-input`输入框组件
4. 新增`ux-textarea`文本域组件
5. 新增`ux-radio-group` `ux-radio`单选组件
6. 新增全局挂载配置 `this.$ux.something()`
7. 修复 `ux-tabbar` 无法设置图片的bug
## 1.0.3（2024-01-11）
1. 新增`ux-countto`数字滚动组件
2. 修改`ux-button`点击触发2次bug
3. 优化架构
## 1.0.2（2024-01-07）
1. 修复`ux-drag`首次长按拖拽位置在原点(0, 0)的bug
## 1.0.1（2024-01-03）
1. 优化`ux-transition`动画表现
## 1.0.0（2024-01-02）
1. ux-frame Uniapp-X 低代码高性能UI框架1.0.0版本正式发布！
