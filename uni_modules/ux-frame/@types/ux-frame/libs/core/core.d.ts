import { Conf } from './conf/index';
import { Store } from './store/index';
import { Locale } from './i18n/index';
import { Animation } from './anim/index';
import { Color } from './color/index';
import { Dates } from './date/index';
import { Format } from './format/index';
import { Verify } from './verify/index';
import { Random } from './random/index';
import { Encrypt } from './encrypt/index';
import { Objs } from './objs/index';
import { Util } from './util/index';
import { Toolkit } from './toolkit/index';
/**
 * UxFrame Core
 */
export declare class Core {
    /**
     * 状态管理
     */
    Store: Store;
    /**
     * 国际化
     */
    Locale: Locale;
    /**
     * 颜色库
     */
    Color: Color;
    /**
     * 日期库
     */
    Date: Dates;
    /**
     * 动画库
     */
    Anim: Animation;
    /**
     * 格式化函数
     */
    Fmt: Format;
    /**
     * 对象操作函数
     */
    Objs: Objs;
    /**
     * 随机数函数
     */
    Random: Random;
    /**
     * 校验函数
     */
    Verify: Verify;
    /**
     * 数据加解密
     */
    Encrypt: Encrypt;
    /**
     * 常用工具函数
     */
    Util: Util;
    /**
     * 工具集
     */
    Toolkit: Toolkit;
    /**
     * 配置
     */
    Conf: Conf;
}
