export interface LiquidProps {
  /**
   * 进度百分比
   */
  percent?: number;

  /**
   * 组件尺寸 支持rpx/px单位
   */
  size: string;

  /**
   * 是否显示外边框
   */
  outline: boolean;

  /**
   * 圆角半径
   */
  radius?: string;

  /**
   * 进度波纹颜色
   */
  waveColor?: string;

  /**
   * 内部背景色
   */
  innerColor?: string;
}