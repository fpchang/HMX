/**
 * UxPage
 */
export type UxPage = {
    /**
     * index
     */
    index: number;
    /**
     * slot
     */
    slot: string;
};
/**
 * UxFormItem
 */
export type UxFormItem = {
    field: string;
    node: UxFormItemComponentPublicInstance;
};
/**
 * UxFormResult
 */
export type UxFormResult = {
    /**
     * 字段名称
     */
    field: string;
    /**
     * 是否校验通过
     */
    valid: boolean;
    /**
     * 错误信息
     */
    error: string;
    /**
     * 表单数据
     */
    formData: UxFormData[];
};
/**
 * UxFormData
 */
export type UxFormData = {
    /**
     * 字段名称
     */
    field: string;
    /**
     * 值
     */
    value: any;
    /**
     * 是否校验通过
     */
    valid: boolean;
    /**
     * 错误信息
     */
    error: string;
};
/**
 * UxFormRule
 */
export type UxFormRule = {
    /**
     * 字段类型
     */
    type: '' | 'string' | 'number' | 'boolean' | 'array' | 'object';
    /**
     * 校验函数
     */
    valid: (val: any) => string;
};
/**
 * TabbarItem
 */
export type UxTab = {
    /**
     * id
     */
    id?: string | null;
    /**
     * 锚点id
     */
    anchorId?: string | null;
    /**
     * 名称 必填
     */
    name: string;
    /**
     * 选中Icon
     */
    selectedIcon?: string | null;
    /**
     * 未选中Icon
     */
    unselectedIcon?: string | null;
    /**
     * 选中颜色
     */
    selectedColor?: string | null;
    /**
     * 未选中颜色
     */
    unselectedColor?: string | null;
    /**
     * 角标
     */
    badge?: number | null;
    /**
     * 红点
     */
    reddot?: boolean | null;
    /**
     * 仅按钮
     */
    btn?: boolean | null;
    /**
     * 原始下标
     */
    index?: number | null;
    /**
     * 禁用
     */
    disabled?: boolean;
    /**
     * 高度
     */
    height?: number;
    /**
     * 节点（内部使用）
     */
    node?: UxNodeInfo;
};
/**
 * UxBtn
 */
export type UxBtn = {
    /**
     * id
     */
    id?: string | null;
    /**
     * 名称 必填
     */
    name: string;
    /**
     * Icon
     */
    icon?: string | null;
};
/**
 * UxNode
 */
export type UxNode = {
    /**
     * id
     */
    id: string;
    /**
     * tag
     */
    tag: string;
    /**
     * 高度
     */
    height: number;
    /**
     * 距顶距离
     */
    top: number;
    /**
     * 节点
     */
    node?: Element | null;
    /**
     * 是否隐藏
     */
    hide: boolean;
};
/**
 * 节点信息
 */
export type UxNodeInfo = {
    width?: number;
    height?: number;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
};
/**
 * UxQr
 */
export type UxQr = {
    /**
     * 文本
     */
    text: string;
    /**
     * 尺寸
     */
    size: number;
    /**
     * 级别
     */
    level: number;
    /**
     * 背景色
     */
    background: string;
    /**
     * 前景色
     */
    foreground: string;
    /**
     * 定位背景色
     */
    locground: string;
    /**
     * 图片
     */
    image: string;
    /**
     * 图片尺寸
     */
    imageSize: number;
    /**
     * 边框
     */
    border: number;
};
/**
 * UxPickerData
 */
export type UxPickerData = {
    /**
     * 表单名称
     */
    name: string;
    /**
     * 值
     */
    value: any;
    /**
     * 子项
     */
    children?: UxPickerData[] | null;
};
/**
 * UxPickerEvent
 */
export type UxPickerEvent = {
    /**
     * 表单名称
     */
    name: string;
    /**
     * 下标
     */
    index: number[];
    /**
     * 名称
     */
    label: string[];
    /**
     * 值
     */
    value: any[];
};
/**
 * UxDatePickerEvent
 */
export type UxDatePickerEvent = {
    /**
     * 表单名称
     */
    name: string;
    /**
     * 下标
     */
    index: number[];
    /**
     * 值
     */
    value: string[];
    /**
     * 格式化值
     */
    format: string;
    /**
     * 日期
     */
    date: string;
    /**
     * 时间
     */
    time: string;
    /**
     * 年
     */
    year: number;
    /**
     * 月
     */
    month: number;
    /**
     * 日
     */
    day: number;
    /**
     * 时
     */
    hour: number;
    /**
     * 分
     */
    minute: number;
    /**
     * 秒
     */
    second: number;
    /**
     * 星期
     */
    week: number;
};
/**
 * UxCalendarEvent
 */
export type UxCalendarEvent = {
    /**
     * 表单名称
     */
    name: string;
    /**
     * 值
     */
    value: UxCalendarDate[];
};
/**
 * UxCalendarDate
 */
export type UxCalendarDate = {
    _date: Date;
    fullDate: string;
    timestamp: number;
    year: number;
    month: number;
    date: number;
    day: number;
    disabled: boolean;
    lunar: string;
    holiday: string;
    isToday: boolean;
    data?: UxCalendarLunar;
};
/**
 * UxCalendarLunar
 */
export type UxCalendarLunar = {
    lYear: number;
    lMonth: number;
    lDay: number;
    IMonthCn: string;
    IDayCn: string;
    cYear: number;
    cMonth: number;
    cDay: number;
    gzYear?: string;
    gzMonth?: string;
    gzDay?: string;
    isToday: boolean;
    isLeap: boolean;
    nWeek?: number;
    ncWeek?: string;
    isTerm?: boolean;
    Term?: string;
    astro?: string;
};
/**
 * UxSliderEvent
 */
export type UxSliderEvent = {
    /**
     * 表单名称
     */
    name: string;
    /**
     * 值
     */
    value: number;
    /**
     * 范围值
     */
    values: number[];
};
/**
 * UxSignature
 */
export type UxSignature = {
    /**
     * 画笔颜色
     */
    color: string;
    /**
     * 画笔大小
     */
    size: number;
    /**
     * 最小宽度
     */
    minWidth: number;
    /**
     * 最大宽度
     */
    maxWidth: number;
    /**
     * 最小速度
     */
    minSpeed: number;
    /**
     * 最大历史记录
     */
    maxHistory: number;
    /**
     * 禁用滚动
     */
    disableScroll: boolean;
    /**
     * 禁用
     */
    disabled: boolean;
};
/**
 * UxCountDownTime
 */
export type UxCountDownTime = {
    /**
     * 天数
     */
    days: number;
    /**
     * 小时数
     */
    hours: number;
    /**
     * 分钟数
     */
    minutes: number;
    /**
     * 秒数
     */
    seconds: number;
    /**
     * 毫秒数
     */
    milliseconds: number;
};
/**
 * UxPreview
 */
export type UxPreview = {
    /**
     * 当前预览
     */
    current: string;
    /**
     * 当前预览id
     */
    currentId?: string | null;
    /**
     * 预览对象数组
     */
    urls?: string[] | null;
    success?: (() => void) | null;
    fail?: ((err: string) => void) | null;
    close?: (() => void) | null;
};
/**
 * UxNumberboxEvent
 */
export type UxNumberboxEvent = {
    /**
     * 表单名称
     */
    name: string;
    /**
     * 值
     */
    value: number;
};
/**
 * UxRateEvent
 */
export type UxRateEvent = {
    /**
     * 表单名称
     */
    name: string;
    /**
     * 值
     */
    value: number;
};
/**
 * UxSwitchEvent
 */
export type UxSwitchEvent = {
    /**
     * 表单名称
     */
    name: string;
    /**
     * 值
     */
    value: boolean;
};
/**
 * UxDragInfo
 */
export type UxDragInfo = {
    /**
     * id
     */
    id: string;
    /**
     * 宽
     */
    width: number;
    /**
     * 高
     */
    height: number;
    /**
     * 节点
     */
    node: UxDragItemComponentPublicInstance;
};
/**
 * UxCreateAnimationOptions
 */
export type UxCreateAnimationOptions = {
    /**
     * 动画持续时间，单位ms
     */
    duration?: number;
    /**
     * 定义动画的效果
     * - linear: 动画从头到尾的速度是相同的
     * - ease: 动画以低速开始，然后加快，在结束前变慢
     * - ease-in: 动画以低速开始
     * - ease-in-out: 动画以低速开始和结束
     * - ease-out: 动画以低速结束
     * - step-start: 动画第一帧就跳至结束状态直到结束
     * - step-end: 动画一直保持开始状态，最后一帧跳到结束状态
     */
    timingFunction?: 'linear' | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'step-start' | 'step-end';
    /**
     * 动画延迟时间，单位 ms
     */
    delay?: number;
    /**
     * 设置transform-origin
     */
    transformOrigin?: string;
};
/**
 * UxTableColumn
 */
export type UxTableColumn = {
    /**
     * key
     */
    key: string;
    /**
     * 标题
     */
    title: string;
    /**
     * 样式
     */
    style?: string;
    /**
     * 文本样式
     */
    textStyle?: string;
    /**
     * 固定列
     */
    fixed?: boolean;
    /**
     * 开启排序
     */
    sorted?: boolean;
    /**
     * 升序，降序
     */
    desc?: string;
    /**
     * 可编辑的
     */
    editable?: boolean;
    /**
     * 输入类型
     */
    inputType?: string;
    /**
     * 标记为日期 排序时按日期处理排序
     */
    date?: boolean;
    /**
     * 格式化
     * fixed|encrypt|cmoney|qmoney|wmoney|yyyy-MM-dd|yyyy-MM-dd HH:mm:ss|yyyy/MM/dd|yyyy/MM/dd HH:mm:ss|yyyy年MM月dd日
     */
    format?: string;
    /**
     * 小数点精度
     */
    decimals?: number;
    /**
     * 单列宽
     */
    width?: string;
    /**
     *  对齐方式 默认 center
     *  left center right
     */
    align?: string;
    /**
     * 合计
     */
    total?: boolean;
    /**
     * 内部使用 距左
     */
    _left?: number;
    /**
     * 内部使用 宽度
     */
    _width?: number;
    /**
     * 内部使用 固定列
     */
    _fixed?: boolean;
    /**
     * 内部使用 距左Fixed
     */
    _fixedLeft?: number;
};
/**
 * UxTableEvent
 */
export type UxTableEvent = {
    /**
     * 行
     */
    row: number;
    /**
     * 列
     */
    col: number;
    /**
     * key
     */
    key: string;
    /**
     * 数据
     */
    data: UTSJSONObject;
};
/**
 * UxGuideItem
 */
export type UxGuideItem = {
    /**
     * 元素ID
     */
    id: string;
    /**
     * 内容
     */
    text: string;
};
/**
 * UxIndexbarItem
 */
export type UxIndexbarItem = {
    /**
     * 元素ID
     */
    id: string;
    /**
     * 名称
     */
    name: string;
    /**
     * 高度
     */
    height: number;
    /**
     * Y轴开始位置
     */
    startY: number;
    /**
     * Y轴结束位置
     */
    endY: number;
};
/**
 * UxWaterfallItemInfo
 */
export type UxWaterfallItemInfo = {
    /**
     * 元素ID
     */
    id: string;
    /**
     * 居顶距离
     */
    top: number;
    /**
     * 居左距离
     */
    left: number;
    /**
     * 宽
     */
    width: number;
    /**
     * 高
     */
    height: number;
    /**
     * 节点
     */
    node: UxWaterfallItemComponentPublicInstance;
};
/**
 * UxToastData
 */
export type UxToastData = {
    /**
     * 元素ID
     */
    id: string;
    /**
     * 内容
     */
    content: string;
    /**
     * 额外数据
     */
    data?: UTSJSONObject;
    /**
     * logo
     */
    logo?: string | null;
    /**
     * 时间
     */
    time?: number | null;
    /**
     * 高度
     */
    height?: number | null;
    /**
     * 可关闭
     */
    closed?: boolean | null;
    /**
     * 节点
     */
    node?: UxToastItemComponentPublicInstance | null;
    /**
     * 元素
     */
    el?: UniElement | null;
};
/**
 * UxActionsheetItem
 */
export type UxActionsheetItem = {
    /**
     * 文本
     */
    text: string;
    /**
     * 图标
     */
    icon?: string | null;
    /**
     * 图标大小
     */
    iconSize?: number | null;
    /**
     * 字体大小
     */
    fontSize?: number | null;
    /**
     * 图标颜色
     */
    iconColor?: string | null;
    /**
     * 字体颜色
     */
    fontColor?: string | null;
    /**
     * 字体加粗
     */
    bold?: boolean | null;
    /**
     * 禁用
     */
    disabled?: boolean | null;
};
/**
 * UxUploadFile
 */
export type UxUploadFile = {
    /**
     * 唯一id
     */
    id: string;
    /**
     * 下标
     */
    index: number;
    /**
     * 类型
     */
    type: string;
    /**
     * 路径
     */
    path: string;
    /**
     * 缩略图路径
     */
    thumb: string;
    /**
     * 上传数据
     */
    data: string;
    /**
     * 宽度
     */
    width: number;
    /**
     * 高度
     */
    height: number;
    /**
     * 图片方向
     */
    orientation: string;
    /**
     * 资源大小
     */
    size: number;
    /**
     * 视频时长
     */
    duration: number;
    /**
     * 上传进度
     */
    progress: number;
    /**
     * 重试次数
     */
    retry: number;
    /**
     * 上传状态
     */
    status: string;
};
