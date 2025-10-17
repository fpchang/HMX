export declare class Toolkit {
    /**
     * 将一个数组分割成指定长度的多个子数组
     * @description 函数接受一个数组和一个数字作为参数，返回一个新的数组，其中包含原数组分割成指定长度的多个子数组。
     * @param arr 要分割的数组
     * @param size 子数组的长度
     * @returns 一个新的数组，其中包含原数组分割成指定长度的多个子数组。
     */
    chunk<T>(arr: T[], size: number): T[][];
    /**
     * 将多个数组连接成一个数组
     * @description 函数接受多个数组作为参数，返回一个新的数组，其中包含所有传入的数组的元素。
     * @param arrs 要合并的数组
     * @returns 一个新的数组，其中包含所有传入的数组的元素。
     */
    concat<T>(...arrs: T[][]): T[];
    /**
     * 将多个值连接成一个数组
     * @description 函数接受多个值作为参数，返回一个新的数组，其中包含所有传入的值。
     * @param values 要合并的值
     * @returns 一个新的数组，其中包含所有传入的值。
     */
    concatValues<T>(...values: T[]): T[];
    getObjKeys(obj: UTSJSONObject): string[];
    /**
     * 根据 `mapper` 函数统计数组中每个项目出现的次数
     * @description 函数接受一个数组和一个 `mapper` 函数作为参数，返回一个对象，其中包含数组中每个项目出现的次数。
     * @param arr 要统计的数组
     * @param mapper 一个函数，用于将数组中的每个元素转换成一个键值对
     * @returns 一个对象，其中包含数组中每个项目出现的次数。
     */
    countBy<T>(arr: T[], mapper: (item: T) => string): UTSJSONObject;
    /**
     * 从数组中删除假值(`false`、`null`、`0`、`''`、`undefined`、`NaN`)
     * @description 函数接受一个数组作为参数，返回一个新的数组，其中不包含假值。
     * @param arr 要过滤的数组
     * @returns 一个新的数组，其中不包含假值。
     */
    compact<T>(arr: T[]): T[];
    /**
     * 计算两个数组的差集
     * @description 函数接受两个数组作为参数，返回一个新的数组，其中包含第一个数组中不包含第二个数组中元素。
     * @param firstArr 第一个数组
     * @param secondArr 第二个数组
     * @returns 一个新的数组，其中包含第一个数组中不包含第二个数组中元素。
     */
    difference<T>(firstArr: T[], secondArr: T[]): T[];
    /**
     * 计算经过提供的函数处理后的两个数组的差集
     * @description 函数接受两个数组和一个函数作为参数，返回一个新的数组，其中包含第一个数组中不包含第二个数组中元素，且经过提供的函数处理。
     * @param firstArr 第一个数组
     * @param secondArr 第二个数组
     * @param mapper 一个函数，用于映射两个数组元素的函数。该函数应用于两个数组中的每个元素，并基于映射后的值进行比较。
     */
    differenceBy<T, U>(firstArr: T[], secondArr: T[], mapper: (item: T) => U): T[];
    /**
     * 根据自定义相等函数计算两个数组的差集
     * @description 函数接受两个数组和一个自定义相等函数作为参数，返回一个新的数组，其中包含第一个数组中不包含第二个数组中元素，且经过提供的函数处理。
     * @param firstArr 第一个数组
     * @param secondArr 第二个数组
     * @param isEqual 一个函数，用于判断两个数组元素是否相等。该函数接受两个参数，并返回一个布尔值
     * @returns 一个新的数组，其中包含第一个数组中不包含第二个数组中元素，且经过提供的函数处理。
     */
    differenceWith<T>(firstArr: T[], secondArr: T[], isEqual: (item1: T, item2: T) => boolean): T[];
    /**
     * 从数组的开头移除指定数量的元素并返回剩余的元素
     * @description 函数接受一个数组和一个数字作为参数，返回一个新的数组，其中包含原数组从开头移除指定数量的元素后的元素。
     * @param arr 要过滤的数组
     * @param n 要移除的元素数量
     * @returns 一个新的数组，其中包含原数组从开头移除指定数量的元素后的元素。
     */
    drop<T>(arr: T[], n: number): T[];
    /**
     * 从数组的开头移除元素，直到遇到第一个满足条件的元素
     * @description 函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含原数组从开头移除元素，直到遇到第一个满足条件的元素后的元素。
     * @param arr 要过滤的数组
     * @param predicate 一个函数，用于判断元素是否满足条件。该函数接受一个参数，并返回一个布尔值
     * @returns 一个新的数组，其中包含原数组从开头移除元素，直到遇到第一个满足条件的元素后的元素。
     */
    dropWhile<T>(arr: T[], predicate: (item: T) => boolean): T[];
    /**
     * 从数组的结尾移除指定数量的元素并返回剩余的元素
     * @description 函数接受一个数组和一个数字作为参数，返回一个新的数组，其中包含原数组从结尾移除指定数量的元素后的元素。
     * @param arr 要过滤的数组
     * @param n 要移除的元素数量
     * @returns 一个新的数组，其中包含原数组从结尾移除指定数量的元素后的元素。
     */
    dropRight<T>(arr: T[], n: number): T[];
    /**
     * 从数组的结尾移除元素，直到遇到第一个满足条件的元素
     * @description 函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含原数组从结尾移除元素，直到遇到第一个满足条件的元素后的元素。
     * @param arr 要过滤的数组
     * @param predicate 一个函数，用于判断元素是否满足条件。该函数接受一个参数，并返回一个布尔值
     * @returns 一个新的数组，其中包含原数组从结尾移除元素，直到遇到第一个满足条件的元素后的元素。
     */
    dropRightWhile<T>(arr: T[], predicate: (item: T) => boolean): T[];
    /**
     * 填充数组中从开始位置到结束位置（不包括结束位置）的元素为指定值
     * @description 函数接受一个数组、一个起始索引、一个结束索引和一个值作为参数，返回一个新的数组，其中包含原数组中从起始索引到结束索引（不包括结束索引）的元素填充为指定值后的元素。如果未指定起始索引或结束索引，则默认填充整个数组。还可以使用负数索引从数组末尾开始计数。
     * @param arr 要填充的数组
     * @param start 起始索引
     * @param end 结束索引
     * @param value 要填充的值
     */
    toFilled<T, P>(arr: T[], value: P, start?: number, end?: number): any[];
    /**
     * 将嵌套数组的每个元素映射到给定的迭代函数，然后将其展开到所需的深度
     * @description 函数接受一个数组、一个迭代函数和一个深度作为参数，返回一个新的数组，其中包含原数组中每个元素经过迭代函数映射后的结果，并展开到所需的深度。
     * @param arr 要展开的数组
     * @param iteratee 一个迭代函数，用于将数组中的元素映射到另一个值。该函数接受一个参数，并返回一个值。
     * @param depth 要展开的深度。如果未指定，则默认为 1。
     * @returns 一个新的数组，其中包含原数组中每个元素经过迭代函数映射后的结果，并展开到所需的深度。
     */
    flatMap<T, U>(arr: T[], iteratee: (item: T) => U[], depth?: number): U[];
    /**
     * 将数组展开到所需的深度
     * @description 函数接受一个数组和一个深度作为参数，返回一个新的数组，其中包含原数组中每个元素展开后的结果，并展开到所需的深度。
     * @param arr 要展开的数组
     * @param depth 要展开的深度。如果未指定，则默认为 1。
     * @returns 一个新的数组，其中包含原数组中每个元素展开后的结果，并展开到所需的深度。
     */
    flatten<T>(arr: T[], depth?: number): T[];
    /**
     * 一次性展开数组中的元素
     * @description 函数接受一个数组作为参数，返回一个新的数组，其中包含原数组中所有元素展开后的结果。
     * @param arr
     * @returns 一个新的数组，其中包含原数组中所有元素展开后的结果。
     */
    flattenDeep<T>(arr: T[]): T[];
    /**
     * 从右到左迭代数组的每个元素，并对其执行指定函数
     * @description 函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含原数组中每个元素从右到左迭代后的结果。
     * @param arr 要迭代的数组
     * @param iteratee 一个函数，用于对数组中的元素进行处理。该函数接受一个参数，并返回一个值。
     * @returns 一个新的数组，其中包含原数组中每个元素从右到左迭代后的结果。
     */
    forEachRight<T, U>(arr: T[], iteratee: (item: T, index: number, arr: T[]) => U): U[];
    /**
     * 将数组的元素根据指定函数分组
     * @description 函数接受一个数组和一个函数作为参数，返回一个对象，其中包含原数组中每个元素根据指定函数分组后的结果。
     * @param arr 要分组的数组
     * @param iteratee 一个函数，用于将数组中的元素映射到另一个值。该函数接受一个参数，并返回一个值。
     * @returns 一个对象，其中包含原数组中每个元素根据指定函数分组后的结果。
     */
    groupBy<T, U>(arr: T[], iteratee: (item: T) => U): UTSJSONObject;
    /**
     * 计算两个数组的交集
     * @description 函数接受两个数组作为参数，返回一个新的数组，其中包含两个数组的交集。
     * @param firstArr 第一个数组
     * @param secondArr 第二个数组
     * @returns 一个新的数组，其中包含两个数组的交集。
     */
    intersection<T>(firstArr: T[], secondArr: T[]): T[];
    /**
     * 计算经过提供的函数处理后的两个数组的交集
     * @description 函数接受两个数组和一个函数作为参数，返回一个新的数组，其中包含两个数组经过提供的函数处理后的交集。
     * @param firstArr 第一个数组
     * @param secondArr 第二个数组
     * @param mapper 一个函数，用于映射两个数组元素的函数。该函数应用于两个数组中的每个元素，并基于映射后的值进行比较。
     * @returns 一个新的数组，其中包含两个数组经过提供的函数处理后的交集。
     */
    intersectionBy<T, U>(firstArr: T[], secondArr: T[], mapper: (item: T) => U): T[];
    /**
     * 根据自定义相等函数计算两个数组的交集
     * @description 函数接受两个数组和一个自定义相等函数作为参数，返回一个新的数组，其中包含两个数组经过提供的函数处理后的交集。
     * @param firstArr 第一个数组
     * @param secondArr 第二个数组
     * @param isEqual 一个函数，用于判断两个数组元素是否相等。该函数接受两个参数，并返回一个布尔值
     * @returns 一个新的数组，其中包含两个数组经过提供的函数处理后的交集。
     */
    intersectionWith<T>(firstArr: T[], secondArr: T[], isEqual: (item1: T, item2: T) => boolean): T[];
    /**
     * 映射数组中的每个元素，基于提供的生成键的函数
     * @description 函数接受一个数组和一个函数作为参数，返回一个对象，其中包含原数组中每个元素映射后的结果，基于提供的生成键的函数。
     * @param arr 要映射的数组
     * @param iteratee 一个函数，用于将数组中的元素映射到另一个值。该函数接受一个参数，并返回一个值。
     * @returns 一个对象，其中包含原数组中每个元素映射后的结果，基于提供的生成键的函数。
     */
    keyBy<T, U>(arr: T[], iteratee: (item: T) => U): UTSJSONObject;
    /**
     * 找到数组中通过将 `getValue` 函数应用于每个元素来返回具有最小值的元素，并返回该元素的值。如果数组为空，则返回 `null`。
     * @description 函数接受一个数组和一个函数作为参数，返回数组中通过将 `getValue` 函数应用于每个元素来返回具有最小值的元素，并返回该元素的值。如果数组为空，则返回 `null`。
     * @param arr 要查找的数组
     * @param getValue 一个函数，用于从数组元素中提取一个值。该函数接受一个参数，并返回一个值
     * @returns 数组中通过将 `getValue` 函数应用于每个元素来返回具有最小值的元素，并返回该元素的值。
     */
    minBy<T>(arr: T[], getValue: (item: T) => number): T | null;
    /**
     * 找到数组中通过将 `getValue` 函数应用于每个元素来返回具有最大值的元素，并返回该元素的值。如果数组为空，则返回 `null`。
     * @description 函数接受一个数组和一个函数作为参数，返回数组中通过将 `getValue` 函数应用于每个元素来返回具有最大值的元素，并返回该元素的值。如果数组为空，则返回 `null`。
     * @param arr 要查找的数组
     * @param getValue 一个函数，用于从数组元素中提取一个值。该函数接受一个参数，并返回一个值
     * @returns 数组中通过将 `getValue` 函数应用于每个元素来返回具有最大值的元素，并返回该元素的值。
     */
    maxBy<T>(arr: T[], getValue: (item: T) => number): T | null;
    /**
     * 找到数组中的最小元素，并返回该元素的值。如果数组为空，则返回 `null`。
     * @description 函数接受一个数组作为参数，返回数组中的最小元素，并返回该元素的值。如果数组为空，则返回 `null`。
     * @param arr 要查找的数组
     * @returns 数组中的最小元素，并返回该元素的值。
     */
    min<T>(arr: T[]): T | null;
    /**
     * 元素大小比较，自动判断类型并进行比较
     */
    compare(a: any, b: any): number;
    /**
     * 找到数组中的最大元素，并返回该元素的值。如果数组为空，则返回 `null`。
     * @description 函数接受一个数组作为参数，返回数组中的最大元素，并返回该元素的值。如果数组为空，则返回 `null`。
     * @param arr 要查找的数组
     * @returns 数组中的最大元素，并返回该元素的值。
     */
    max<T>(arr: T[]): T | null;
    /**
     * 根据多个属性和它们对应的排序顺序对对象数组进行排序
     * @description 函数接受一个对象数组，一个要排序的属性数组，以及一个排序顺序数组作为参数，返回一个排序后的对象数组，根据每个键及其排序顺序进行排序。(`asc` 表示升序，`desc` 表示降序) 如果一个键的值相等，则按照下一个键进行排序，以此类推。
     * @param arr 要排序的对象数组
     * @param props 要排序的属性数组
     * @param orders 排序顺序数组
     * @returns 排序后的对象数组
     */
    orderBy<T>(arr: T[], props: string[], orders: ('asc' | 'desc')[]): T[];
    /**
     * 返回数组中的随机元素
     * @description 函数接受一个数组作为参数，返回数组中的随机元素。空数组返回 `null`。
     * @param arr 要查找的数组
     * @returns 数组中的随机元素。
     */
    sample<T>(arr: T[]): T | null;
    /**
     * 从数组中随机选取指定数量的元素
     * @description 函数接受一个数组和一个数字作为参数，返回一个新的数组，其中包含从数组中随机选取指定数量的元素。
     * @param arr 要查找的数组
     * @param n 要选取的元素数量
     * @returns 一个新的数组，其中包含从数组中随机选取指定数量的元素。
     */
    sampleSize<T>(arr: T[], n: number): T[];
    /**
     * 随机化数组中元素的顺序，使用 Fisher-Yates 算法
     * @description 函数接受一个数组作为参数，返回一个新的数组，其中包含原数组随机化顺序后的元素。
     * @param arr 要随机化的数组
     * @returns 一个新的数组，其中包含原数组随机化顺序后的元素。
     */
    shuffle<T>(arr: T[]): T[];
    /**
     * 返回数组、对象或字符串的长度
     * @description 函数接受一个数组、对象或字符串作为参数，返回其长度。
     * @param value 要查找的数组、对象或字符串
     * @returns 数组、对象或字符串的长度。
     */
    size(value: any): number;
    /**
     * 返回一个数组，其中包含从输入数组 `arr` 中获取的前 `n` 个元素
     * @description 函数接受一个数组和一个数字作为参数，返回一个新的数组，其中包含从输入数组 `arr` 中获取的前 `n` 个元素。
     * @param arr 要查找的数组
     * @param n 要获取的元素数量
     * @returns 一个新的数组，其中包含从输入数组 `arr` 中获取的前 `n` 个元素
     */
    take<T>(arr: T[], n: number): T[];
    /**
     * 返回一个数组，其中包含满足提供的谓词函数的前导元素
     * @description 函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含满足提供的谓词函数的前导元素。
     * @param arr 要查找的数组
     * @param predicate 一个函数，用于判断元素是否满足条件。
     * @returns 一个新的数组，其中包含满足提供的谓词函数的前导元素。
     */
    takeWhile<T>(arr: T[], predicate: (item: T) => boolean): T[];
    /**
     * 返回一个数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素
     * @description 函数接受一个数组和一个数字作为参数，返回一个新的数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素。
     * @param arr 要查找的数组
     * @param n 要获取的元素数量
     * @returns 一个新的数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素
     */
    takeRight<T>(arr: T[], n: number): T[];
    /**
     * 返回一个数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素，直到遇到第一个不满足条件的元素
     * @description 函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素，直到遇到第一个不满足条件的元素。
     * @param arr 要查找的数组
     * @param predicate 一个函数，用于判断元素是否满足条件。
     * @param n 要获取的元素数量
     * @returns 一个新的数组，其中包含从输入数组 `arr` 中获取的最后 `n` 个元素，直到遇到第一个不满足条件的元素
     */
    takeRightWhile<T>(arr: T[], predicate: (item: T) => boolean): T[];
    /**
     * 返回两个数组的并集
     * @description 函数接受两个数组作为参数，返回一个新的数组，其中包含两个数组的并集。
     * @param arr1 第一个数组
     * @param arr2 第二个数组
     * @returns 一个新的数组，其中包含两个数组的并集。
     */
    union<T>(arr1: T[], arr2: T[]): T[];
    /**
     * 使用提供的映射函数来确定相等性，从所有给定的数组中创建一个按顺序的唯一值数组。
     * @description 函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含两个数组的交集，使用提供的映射函数来确定相等性。
     * @param arr1 第一个数组
     * @param arr2 第二个数组
     * @param mapper 一个函数，用于处理每个元素。该函数接受一个参数，并返回一个值
     * @returns 一个新的数组，其中包含两个数组的交集，使用提供的映射函数来确定相等性。
     */
    unionBy<T, U>(arr1: T[], arr2: T[], mapper: (item: T) => U): T[];
    /**
     * 使用提供的比较函数来确定相等性，从所有给定的数组中创建一个按顺序的唯一值数组。
     * @description 此函数接受两个数组和一个自定义相等性函数，合并这两个数组，并返回一个新数组，该数组仅包含根据自定义相等性函数确定的唯一值。
     * @param arr1 第一个数组
     * @param arr2 第二个数组
     * @param areItemsEqual 一个函数，用于比较两个元素是否相等。该函数接受两个参数，并返回一个布尔值。
     * @returns 一个新的数组，其中包含两个数组的交集，使用提供的比较函数来确定相等性。
     */
    unionWith<T>(arr1: T[], arr2: T[], areItemsEqual: (a: T, b: T) => boolean): T[];
    /**
     * 返回一个数组，其中包含输入数组 `arr` 中所有元素的唯一值
     * @description 函数接受一个数组作为参数，返回一个新的数组，其中包含输入数组 `arr` 中所有元素的唯一值。
     * @param arr 要查找的数组
     * @returns 一个新的数组，其中包含输入数组 `arr` 中所有元素的唯一值
     */
    uniq<T>(arr: T[]): T[];
    /**
     * 返回一个数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `iteratee` 函数对每个元素进行处理
     * @description 函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `iteratee` 函数对每个元素进行处理。
     * @param arr 要查找的数组
     * @param iteratee 一个函数，用于处理每个元素。该函数接受一个参数，并返回一个值
     * @returns 一个新的数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `iteratee` 函数对每个元素进行处理
     */
    uniqBy<T, K>(arr: T[], iteratee: (item: T) => K): T[];
    /**
     * 返回一个数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `comparator` 函数对每个元素进行比较
     * @description 函数接受一个数组和一个函数作为参数，返回一个新的数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `comparator` 函数对每个元素进行比较。
     * @param arr 要查找的数组
     * @param areItemsEqual 一个函数，用于比较每个元素。该函数接受两个参数，并返回一个数字，表示两者的相对顺序。
     * @returns 一个新的数组，其中包含输入数组 `arr` 中所有元素的唯一值，并根据提供的 `comparator` 函数对每个元素进行比较
     */
    uniqWith<T>(arr: T[], areItemsEqual: (a: T, b: T) => boolean): T[];
    /**
     * 将一个元素组的数组中相同位置的元素收集起来，并将它们作为一个新数组返回。
     * @description 函数接受一个数组作为参数，返回一个新的数组，其中包含 `arr` 数组所有列组成的元素数组。
     * @param arr 要查找的数组
     * @returns 收集同一位置的内部数组元素而创建的新数组。
     */
    unzip<T>(arr: T[][]): T[][];
    /**
     * 将一个嵌套的数组解压缩，并对重新分组的元素应用一个 `iteratee` 函数。
     * @description 函数接受一个数组和一个函数作为参数，实现把 `arr` 数组中元素按照 `iteratee` 函数的返回值进行分组，并返回一个新的数组。
     * @param target 要解压缩的嵌套数组。这是一个数组的数组，其中每个内部数组包含要解压缩的元素。
     * @param iteratee 用于转换解压缩后的元素的函数。
     * @returns 新的解压缩和转换后的元素数组。
     */
    unzipWith<T, R>(target: T[][], iteratee: any): R[];
    /**
     * 创建一个数组，其中排除了所有指定的值。
     * @description 函数接受一个数组和一个或多个值作为参数，返回一个新的数组，其中排除了所有指定的值。使用 `SameValueZero` 进行相等性比较。
     * @param arr 要查找的数组
     * @param values 要排除的值
     * @returns 一个新的数组，其中排除了所有指定的值。
     */
    without<T>(arr: T[], ...values: T[]): T[];
    /**
     * 计算两个数组之间的对称差集
     * @description 函数接受两个数组作为参数，返回一个新的数组，其中包含两个数组的对称差集。
     * @param arr1 第一个数组
     * @param arr2 第二个数组
     * @returns 一个新的数组，其中包含两个数组的对称差集。
     */
    xor<T>(arr1: T[], arr2: T[]): T[];
    /**
     * 使用自定义映射函数来计算两个数组之间的对称差集
     * @description 函数接受两个数组和一个函数作为参数，返回一个新的数组，其中包含两个数组的对称差集，使用提供的映射函数来确定相等性。
     * @param arr1 第一个数组
     * @param arr2 第二个数组
     * @param mapper 一个函数，用于处理每个元素。
     * @returns 一个新的数组，其中包含两个数组的对称差集，使用提供的映射函数来确定相等性。
     */
    xorBy<T, K>(arr1: T[], arr2: T[], mapper: (item: T) => K): T[];
    /**
     * 使用自定义相等性函数来计算两个数组之间的对称差集
     * @description 函数接受两个数组和一个函数作为参数，返回一个新的数组，其中包含两个数组的对称差集，使用提供的相等性函数来确定相等性。
     * @param arr1 第一个数组
     * @param arr2 第二个数组
     * @param areItemsEqual 一个函数，用于比较两个元素是否相等。该函数接受两个参数，并返回一个布尔值。
     * @returns 一个新的数组，其中包含两个数组的对称差集，使用提供的相等性函数来确定相等性。
     */
    xorWith<T>(arr1: T[], arr2: T[], areItemsEqual: (a: T, b: T) => boolean): T[];
    /**
     * 将多个数组组合成一个元组数组
     * @description 函数接受多个数组作为参数，返回一个新的数组，其中每一个元素都是一个元组， 包含输入数组的对应元素。如果数组长度不同，结果数组的长度将是最长数组的长度，缺失的值将是 `null`。
     * @param arrs 要组合的数组
     * @returns 一个新的数组，其中包含所有数组的元素。
     */
    zip<T>(...arrs: T[][]): T[][];
    /**
     * 将两个数组合并为一个对象，一个数组包含属性名称，另一个数组包含对应的值。
     * @description 该函数接受两个数组作为输入：一个包含属性名称，另一个包含相应的值。它返回一个新对象，其中第一个数组中的属性名称作为键，第二个数组中对应的元素作为值。如果 `keys` 数组的长度大于 `values` 数组的长度，则返回的对象将包含 `null` 值。
     * @param keys 一个数组
     * @param values 另一个数组
     * @returns 一个新对象，其中第一个数组中的属性名称作为键，第二个数组中对应的元素作为值。
     */
    zipObject<T>(keys: string[], values: T[]): UTSJSONObject;
    /**
     * 返回数组的第一个元素。该函数接收一个数组作为参数，返回数组的第一个元素。如果数组为空，则返回 `null`。
     * @param arr 要查找的数组
     * @returns 数组的第一个元素。
     */
    head<T>(arr: T[]): T | null;
    /**
     * 返回一个新数组，其中除了第一个元素外，包含所有元素。
     * @description 函数接受一个数组作为参数，返回一个新数组，其中除了第一个元素外，包含所有元素。如果数组为空或只有一个元素，则返回一个空数组。
     * @param arr 要查找的数组
     * @returns 一个新数组，其中除了第一个元素外，包含所有元素。
     */
    tail<T>(arr: T[]): T[];
    /**
     * 返回数组的最后一个元素。
     * @description 该函数接收一个数组作为参数，返回数组的最后一个元素。如果数组为空，则返回 `null`。
     * @param arr 要查找的数组
     * @returns 数组的最后一个元素。
     */
    last<T>(arr: T[]): T | null;
    /**
     * 返回一个数组，其中包含数组中除最后一个元素外的所有元素。
     * @description 函数接受一个数组作为参数，返回一个新数组，其中包含数组中除最后一个元素外的所有元素。如果数组为空或只有一个元素，则返回一个空数组。
     * @param arr 要查找的数组
     * @returns 一个数组，其中包含数组中除最后一个元素外的所有元素。
     */
    initial<T>(arr: T[]): T[];
    /**
     * 从数组中查找第一个元素满足条件的索引
     * @description 函数接受一个数组和一个函数作为参数，返回第一个元素满足条件的索引。
     * @param arr 要查找的数组
     * @param predicate 一个函数，用于判断元素是否满足条件。该函数接受一个参数，并返回一个布尔值
     * @returns 第一个元素满足条件的索引。
     */
    findIndex<T>(arr: T[], predicate: (item: T) => boolean): number;
    /**
     * 从数组中查找第一个元素满足条件的元素
     * @description 函数接受一个数组和一个函数作为参数，返回第一个元素满足条件的元素。
     * @param arr 要查找的数组
     * @param predicate 一个函数，用于判断元素是否满足条件。该函数接受一个参数，并返回一个布尔值
     * @returns 第一个元素满足条件的元素。
     */
    find<T>(arr: T[], predicate: (item: T) => boolean): T | null;
    /**
     * 从数组中查找所有元素满足条件的索引
     * @description 函数接受一个数组和一个函数作为参数，返回所有元素满足条件的索引。
     * @param arr 要查找的数组
     * @param predicate 一个函数，用于判断元素是否满足条件。该函数接受一个参数，并返回一个布尔值
     * @returns 所有元素满足条件的索引。
     */
    findIndices<T>(arr: T[], predicate: (item: T) => boolean): number[];
    /**
     * 从数组中查找所有元素满足条件的元素
     * @description 函数接受一个数组和一个函数作为参数，返回所有元素满足条件的元素。
     * @param arr 要查找的数组
     * @param predicate 一个函数，用于判断元素是否满足条件。该函数接受一个参数，并返回一个布尔值
     * @returns 所有元素满足条件的元素。
     */
    filter<T>(arr: T[], predicate: (item: T) => boolean): T[];
    /**
     * 从数组中查找所有元素不满足条件的元素
     * @description 函数接受一个数组和一个函数作为参数，返回所有元素不满足条件的元素。
     * @param arr 要查找的数组
     * @param predicate 一个函数，用于判断元素是否不满足条件。该函数接受一个参数，并返回一个布尔值
     * @returns 所有元素不满足条件的元素。
     */
    reject<T>(arr: T[], predicate: (item: T) => boolean): T[];
    /**
     * 将一个数字限制在指定的包含边界内
     * @description 该函数接受一个数字和两个边界，并返回将数字限制在指定边界内的结果。如果数字小于第一个边界，则返回第一个边界；如果数字大于第二个边界，则返回第二个边界；否则返回数字本身。
     * @param {number} value 要限制的数字
     * @param {number} min 最小值
     * @param {number} max 最大值
     * @returns {number} 限制后的数字
     */
    clamp(value: number, min: number): number;
    clamp(value: number, min: number, max: number): number;
    /**
     * 检查值是否在指定范围内
     * @description 该函数接受一个数字和两个边界，并返回一个布尔值，指示数字是否在指定范围内。
     * @param {number} value 要检查的数字
     * @param {number} min 范围的下限 (包含在内)
     * @param {number} max 范围的上限 (不包含在内)
     * @returns {boolean} 布尔值，指示数字是否在指定范围内
     */
    inRange(value: number, min: number): boolean;
    inRange(value: number, min: number, max: number): boolean;
    /**
     * 计算数字数组的平均值
     * @description 该函数接受一个数字数组，并返回数组中所有数字的平均值。如果数组为空，则返回 NaN。
     * @param {number[]} nums 要计算平均值的数字数组
     * @returns {number} 数组的平均值
     */
    mean(nums: number[]): number;
    /**
     * 计算数字数组的平均值，通过对每个元素应用 `getValue` 函数来选择值
     * @description 该函数接受一个数字数组和一个 `getValue` 函数，并返回数组中所有元素的平均值。如果数组为空，则返回 NaN。
     * @param {number[]} items 要计算平均值的数字数组
     * @param {function} getValue 一个函数，用于从数组元素中选择值
     * @returns {number} 数组的平均值
     */
    meanBy<T>(items: T[], getValue: (item: T) => number): number;
    /**
     * 生成指定范围内的随机数。该数可以是整数或浮点数。
     * @description 如果只提供一个参数，则返回一个介于 0 到该参数 (不包含该参数) 之间的随机数。如果提供两个参数，则返回一个介于第一个参数 (包含) 到第二个参数 (不包含) 之间的随机数。
     * @param {number} min 随机数的下限 (包含在内)
     * @param {number} max 随机数的上限 (不包含在内)
     * @returns {number} 随机数
     */
    random(min: number): number;
    random(min: number, max: number): number;
    /**
     * 生成指定范围内的随机整数。
     * @description 如果只提供一个参数，则返回一个介于 `0` 到该参数 (不包含该参数) 之间的随机整数。如果提供两个参数，则返回一个介于第一个参数 (包含) 到第二个参数 (不包含) 之间的随机整数。
     * @param {number} min 随机整数的下限 (包含在内)
     * @param {number} max 随机整数的上限 (不包含在内)
     * @returns {number} 随机数
     */
    randomInt(min: number): number;
    randomInt(min: number, max: number): number;
    /**
     * 返回一个从 `start` 到 `end` 的数字数组，步长为 `step`。
     * @description 如果未提供 `step`，则默认为 `1`。注意，`step` 必须是一个非零整数。
     * @param {number} start 起始值 (包含在内)
     * @param {number} end 结束值 (不包含在内)
     * @param {number} step 步长 (默认为 `1`)
     * @returns {number[]} 数字数组
     */
    range(end: number): number[];
    range(start: number, end: number): number[];
    range(start: number, end: number, step: number): number[];
    /**
     * 将一个数字四舍五入到指定的精度。
     * @description 该函数接受一个数字和一个可选的精度值，并返回该数字四舍五入到指定的小数位数的结果。
     * @param {number} value 要四舍五入的数字
     * @param {number} precision 精度值 (默认为 `0`)
     * @returns {number} 四舍五入后的数字
     */
    round(value: number, precision?: number): number;
    /**
     * 计算一个数字数组的总和。
     * @description 该函数接受一个数字数组，并返回数组中所有数字的总和。
     * @param {number[]} nums 要计算总和的数字数组
     * @returns {number} 数组的总和
     */
    sum(nums: number[]): number;
    /**
     * 计算数字数组的总和，通过对每个元素应用 `getValue` 函数来选择值。
     * @description 该函数接受一个数字数组和一个 `getValue` 函数，并返回数组中所有元素的总和。如果数组为空，则返回 `0`。
     * @param {T[]} items 要计算总和的数字数组
     * @param {function} getValue 从每个元素选择数值的函数。
     * @returns {number} 数组的总和
     */
    sumBy<T>(items: T[], getValue: (item: T) => number): number;
}
