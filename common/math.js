/**
 * 生成数字数组指定长度的所有不区分顺序的组合（无重复组合）
 * @param {number[]} nums - 输入的数字数组（允许包含重复元素）
 * @param {number} targetLength - 指定的组合长度（非负整数）
 * @returns {number[][]} 符合长度要求的所有不重复组合
 * @throws {Error} 入参不合法时抛出明确的错误提示
 */
export function getSpecifiedLengthCombinations(nums, targetLength) {
    // 1. 严格入参校验
    if (!Array.isArray(nums)) {
        throw new Error('入参错误：第一个参数必须是数字数组');
    }
    if (!Number.isInteger(targetLength)) {
        throw new Error('入参错误：第二个参数（组合长度）必须是整数');
    }
    if (targetLength < 0) {
        throw new Error('入参错误：第二个参数（组合长度）不能为负数');
    }

    // 2. 预处理：去重 + 排序（去重避免重复组合，排序保证组合内元素有序）
    const uniqueSortedNums = [...new Set(nums)].sort((a, b) => a - b);
    const result = [];

    // 3. 边界情况快速处理
    // 情况1：目标长度为0 → 仅返回空数组（组合的定义包含空集）
    if (targetLength === 0) {
        return [[]];
    }
    // 情况2：目标长度超过去重后数组长度 → 无符合条件的组合
    if (targetLength > uniqueSortedNums.length) {
        return [];
    }

    // 4. 回溯法生成指定长度的组合（核心逻辑）
    /**
     * 回溯递归函数
     * @param {number} start - 遍历起始索引（避免重复组合）
     * @param {number[]} currentComb - 当前正在构建的组合
     */
    function backtrack(start, currentComb) {
        // 终止条件：当前组合长度等于目标长度 → 加入结果集
        if (currentComb.length === targetLength) {
            result.push([...currentComb]); // 浅拷贝，避免后续修改影响结果
            return;
        }

        // 遍历剩余元素（从start开始，保证只往后选，避免顺序重复）
        for (let i = start; i < uniqueSortedNums.length; i++) {
            // 选择当前元素
            currentComb.push(uniqueSortedNums[i]);
            // 递归：下一轮从i+1开始（不回头选，避免[1,2]和[2,1]重复）
            backtrack(i + 1, currentComb);
            // 回溯：撤销选择，尝试下一个元素
            currentComb.pop();
        }
    }

    // 启动回溯：从索引0开始，初始组合为空
    backtrack(0, []);

    // 5. 返回最终结果
    return result;
}

// ================================== 示例使用 ==================================
// 示例1：基础场景（无重复数字，指定长度2）
// const example1 = getSpecifiedLengthCombinations([1, 2, 3], 2);
// console.log('示例1：[1,2,3] 长度2的组合 →', example1);
// // 输出：[[1,2], [1,3], [2,3]]

// // 示例2：含重复数字的场景（自动去重）
// const example2 = getSpecifiedLengthCombinations([1, 2, 2, 3], 2);
// console.log('示例2：[1,2,2,3] 长度2的组合 →', example2);
// // 输出：[[1,2], [1,3], [2,3]]

// // 示例3：目标长度等于数组长度
// const example3 = getSpecifiedLengthCombinations([1, 2, 3], 3);
// console.log('示例3：[1,2,3] 长度3的组合 →', example3);
// // 输出：[[1,2,3]]

// // 示例4：目标长度为0（特殊场景）
// const example4 = getSpecifiedLengthCombinations([1, 2], 0);
// console.log('示例4：[1,2] 长度0的组合 →', example4);
// // 输出：[[]]

// // 示例5：目标长度超过数组长度
// const example5 = getSpecifiedLengthCombinations([1, 2], 3);
// console.log('示例5：[1,2] 长度3的组合 →', example5);
// // 输出：[]

// // 示例6：空数组入参
// const example6 = getSpecifiedLengthCombinations([], 0);
// console.log('示例6：空数组 长度0的组合 →', example6);
// // 输出：[[]]
// const example7 = getSpecifiedLengthCombinations([], 1);
// console.log('示例7：空数组 长度1的组合 →', example7);
// 输出：[]


export function sortObjectByNumberValue(obj, isAsc = true, ignoreNonNumber = true) {
    // 入参校验
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        throw new Error('第一个参数必须是非数组、非null的普通对象');
    }

    // 步骤1：将对象转换为键值对数组，并过滤/处理非数字值
    const keyValueArr = Object.entries(obj).map(([key, value]) => {
        // 判定是否为有效数字
        const isNumber = typeof value === 'number' && !isNaN(value);
        return {
            key,
            value: isNumber ? value : Infinity, // 非数字值视为Infinity（排末尾）
            isEffectiveNumber: isNumber
        };
    });

    // 步骤2：过滤非数字值（若开启忽略）
    const processedArr = ignoreNonNumber 
        ? keyValueArr.filter(item => item.isEffectiveNumber) 
        : keyValueArr;

    // 步骤3：按数字值排序
    processedArr.sort((a, b) => {
        const diff = a.value - b.value;
        return isAsc ? diff : -diff;
    });

    // 步骤4：转换为纯键值对数组返回
    return processedArr.map(item => [item.key, item.value === Infinity ? obj[item.key] : item.value]);
}

export function sortObjectArrayByNumberValue(arr, key, isAsc = true) {
    // 入参校验
    if (!Array.isArray(arr)) {
        throw new Error('第一个参数必须是对象数组');
    }
    if (typeof key !== 'string' || key === '') {
        throw new Error('第二个参数必须是非空字符串（排序属性名）');
    }
    if (typeof isAsc !== 'boolean') {
        throw new Error('第三个参数必须是布尔值（是否升序）');
    }

    // 深拷贝原数组，避免修改原数据
    const newArr = JSON.parse(JSON.stringify(arr));

    // 核心排序逻辑
    newArr.sort((a, b) => {
        // 获取两个对象的目标属性值，非数字/undefined/null 视为 Infinity（排末尾）
        const valA = typeof a[key] === 'number' && !isNaN(a[key]) ? a[key] : Infinity;
        const valB = typeof b[key] === 'number' && !isNaN(b[key]) ? b[key] : Infinity;

        // 升序/降序计算差值
        const diff = valA - valB;
        return isAsc ? diff : -diff;
    });

    return newArr;
}