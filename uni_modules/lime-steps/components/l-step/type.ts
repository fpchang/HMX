// @ts-nocheck
export type StepStatus = 'wait' | 'process' | 'finish' | 'error';
export interface StepProps {
  /**
   * 步骤描述
   */
  content?: string;
  /**
   * 图标，默认显示内置图标，也可以自定义图标，值为 false 则不显示图标。
   */
  icon?: string;

  /**
   * 标题
   */
  title?: string;

  /**
   * 垂直方向 标题右侧信息
   */
  titleRight?: string;
  /**
   * 用于控制 current 指向的步骤条的状态
   */
  status: 'wait' | 'process' | 'finish' | 'error';
}