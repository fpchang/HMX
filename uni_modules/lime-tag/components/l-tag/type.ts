/* eslint-disable */
export type SizeEnum = 'small' | 'medium' | 'large';
export interface TagProps {
  /**
   * 标签是否可关闭
   */
  closable: boolean;
  /**
   * 组件子元素
   */
  content?: string;
  /**
   * 标签禁用态，失效标签不能触发事件。默认风格（type=default）才有禁用态
   */
  disabled: boolean;
  /**
   * 标签中的图标，可自定义图标呈现
   */
  icon?: string;
  /**
   * 图标前缀，用于自定义图标
   */
  prefix: string;
  /**
   * 标签最大宽度，宽度超出后会出现省略号。示例：'50px' / 80
   */
  maxWidth?: string;
  /**
   * 标签类型，有三种：方形、圆角方形、标记型
   * @default square
   */
  shape: 'square' | 'round' | 'mark';
  /**
   * 标签尺寸
   * @default medium
   */
  size: SizeEnum;
  /**
   * 组件风格，用于描述组件不同的应用场景
   */
  type: 'default' | 'primary' | 'warning' | 'danger' | 'success';
  /**
   * 标签风格变体
   */
  variant: 'solid' | 'light' | 'outline' | 'light-outline';
  color?: string;
  textColor?: string;
  fontSize?: string;
  radius?:string;
  padding?:string;
}
