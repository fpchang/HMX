/**
 * 本插件由UxFrame授权予插件购买者个人/公司单个项目专用，请尊重知识产权，勿私下传播，违者追究法律责任。
 * @author UxFrame
 * @date 2023-12-01 00:00:00
 */
import { Core } from './libs/core/core';
/**
 * 导出组件类型
 */
export type * from './libs/types/types';
/**
 * 导出图表类型
 */
export type * from './libs/types/chart';
/**
 * 导出日期类型
 */
export type * from './libs/types/date';
/**
 * 导出颜色类型
 */
export type * from './libs/types/color';
/**
 * 导出use函数
 */
export * from './libs/use/style';
export * from './libs/use/resize';
export * from './libs/use/darkmode';
/**
 * 导出核心类
 */
export * from './libs/core/core';
export declare const $ux: Core;
/**
 * 安装器
 */
export declare const uxframe: (options: UxFrameInstallOptions) => VuePlugin;
