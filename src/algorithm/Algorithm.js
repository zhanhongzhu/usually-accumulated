"use strict";
exports.__esModule = true;
/*
 * @Author: mark
 * @Date: 2018-05-03 21:57:01
 * @Last Modified by: etf
 * @Last Modified time: 2018-09-10 13:52:36
 * 简单的算法专题
 */
console.warn(' ------------------------------------算法专题begin----------------------------------');
/**
 * 交换参数
 * @param {*} arr
 * @param {*} a
 * @param {*} b
 */
var swap = function (arr, a, b) {
    var curr = arr[a];
    arr[a] = arr[b];
    arr[b] = curr;
};
/**
 *
 * @param {选择排序算法} arr
 */
var sort = function (arr) {
    console.time();
    for (var i = 0; i < arr.length; i++) {
        //假设遍历的当前第一个是最小的
        var minIndex = i;
        //第二次遍历把arr[minIndex]和数组中的其他的值进行遍历
        for (var j = 0; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        //外层循环做交换
        swap(arr, minIndex, i);
    }
    console.log(arr);
    console.timeEnd();
};
sort([3, 6, 28, 123, 34]);
// 冒泡排序算法
/**
 *
 * @param {*冒泡排序算法} arr
 */
var bubbleSort = function (arr) {
    console.log('冒泡算法开始时间:');
    console.time();
    for (var i = 0; i < arr.length; i++) {
        // 这个循环时获取到之后的项进行比较
        for (var j = i + 1; j > 0; j--) {
            // 这个核心就是 如果当前项小于前一项那么当前项向上冒泡
            if (arr[i] < arr[j - 1]) {
                // 冒泡交换
                swap(arr, j, j - 1);
            }
        }
    }
    console.timeEnd();
    console.log(arr);
};
bubbleSort([3, 123, 6, 28, 34]);
//插入排序算法
/**
 *
 * @param {插入排序} arr
 */
var insertSort = function (arr) {
    console.time();
    for (var i = 0; i < arr.length; i++) {
        // 在一次循环的时候首先缓存下来当前的值和上一个index 缓存上一个index用来比较
        var compareIndex = i - 1;
        var currentValue = arr[i];
        // 在当前位置可以比较并且当前的值小于前一项的值的时候插入缓存的值然后修改index
        while (compareIndex >= 0 && arr[compareIndex] > currentValue) {
            arr[compareIndex + 1] = arr[compareIndex];
            compareIndex--;
        }
        arr[compareIndex + 1] = currentValue;
    }
    console.timeEnd();
    console.log(arr);
};
insertSort([3, 2, 1]);
/**
 * 二分查找算法
 * 什么叫二分查找？ 二分查找也称为折半查找。是指在有序的数组里找出指定的值，返回该值在数组中的索引。
 * （1）从有序数组的最中间元素开始查找，如果该元素正好是指定查找的值，则查找过程结束。否则进行下一步;
 * （2）如果指定要查找的元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半区域查找，然后重复第一步的操作;
 * （3）重复以上过程，直到找到目标元素的索引，查找成功;或者直到子数组为空，查找失败。
 * 注意： 这个先要把数组排序一下 在有序数组中查找
 * 优点是比较次数少，查找速度快，平均性能好；
 * 其缺点是要求待查表为有序表，且插入删除困难。因此，折半查找方法适用于不经常变动而查找频繁的有序列表。
 */
/**
 * 非递归实现
 * @param {*} arr
 * @param {*} target
 */
function binarySearcNoRecursive(arr, target) {
    var low = 0, high = arr.length - 1;
    while (low <= high) {
        // 首先找到中间位置
        var middle = ((high + low) / 2);
        if (target === arr[middle]) {
            return middle;
        }
        else if (target > arr[middle]) {
            low = middle + 1;
        }
        else if (target < arr[middle]) {
            high = middle - 1;
        }
        else {
            return -1;
        }
    }
}
var result = binarySearcNoRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86], 23);
console.log("\u4E8C\u5206\u67E5\u627E\u4E0D\u7528\u5FAA\u73AF\u627E\u5230\u7684\u4F4D\u7F6E:" + result);
/**
 * 递归实现 循环调用自身
 * @param {*} arr
 * @param {*} target
 */
function binarySearcRecursive(arr, low, high, target) {
    if (low > high) {
        return -1;
    }
    var middle = ((high + low) / 2);
    if (arr[middle] === target) {
        return middle;
    }
    else if (arr[middle] > target) {
        high = middle - 1;
        binarySearcRecursive(arr, low, high, target);
    }
    else if (arr[middle] < target) {
        low = middle + 1;
        binarySearcRecursive(arr, low, high, target);
    }
}
var recursiveRes = binarySearcNoRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 44, 86], 3);
console.log("\u4E8C\u5206\u67E5\u627E\u4E0D\u7528\u5FAA\u73AF\u627E\u5230\u7684\u4F4D\u7F6E:" + recursiveRes);
/**
 * leet code入门级算法系列
 */
console.warn("leet code Array \u4E13\u9898\u5F00\u59CB");
/**
 * leet code 算法专题
 */
/**
 * 1 删除排序数组中的重复项
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 示例
 * 给定数组 nums = [1,1,2],
 * 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。
 * 你不需要考虑数组中超出新长度后面的元素。
 */
var removeDuplicates = function (nums) {
    var i = 0;
    for (var j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    nums.splice(i + 1);
    console.log(nums);
    console.log(nums.length);
    return i + 1;
};
/**
 * 解析
 * 方法 双指针法
 * i是慢指针，j是快指针 当我们遇到 nums[j] \neq nums[i]nums[j]≠nums[i] 时，跳过重复项的运行已经结束，
 * 因此我们必须把它（nums[j]nums[j]）的值复制到 nums[i + 1]nums[i+1]。然后递增 ii，接着我们将再次重复相同的过程，直到 jj 到达数组的末尾为止。
 * 复杂度分析：
 * 时间复杂度： O(n) 假设数组长度是n 那么i和j最多就是遍历n步
 * 空间复杂度： O(1)
 */
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
/**
 * 2：  买卖股票的最佳时机
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你最多可以完成一次交易
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）
 *
 * 输入: [7,1,5,3,6,4]
 * 输出: 7
 * 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
 * 随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
 */
var maxProfit = function (prices) {
    if (prices.length < 2)
        return 0;
    // 定义利润
    var count = 0;
    var PreMin = prices[0];
    // 获取最大的单天利润
    for (var i = 0; i < prices.length; i++) {
        count = Math.max(count, prices[i] - PreMin);
        PreMin = Math.min(PreMin, prices[i]);
    }
    console.log(count);
    return count;
};
/**
 * 解析： 贪心算法
 */
console.log('=================股票最佳购买时机贪心算法===================');
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log('====================================');
/**
 * 3：  买卖股票的最佳时机
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 设计一个算法来计算你所能获取的最大利润。你可以尽可能多的完成交易
 * 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）
 */
var maxProfitMore = function (prices) {
    if (prices.length < 2)
        return 0;
    var ret = 0;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            ret += prices[i + 1] - prices[i];
        }
    }
    return ret;
};
/**
 * 解析： 非贪心算法
 * 只要下一天的价钱 大于今天的价钱 那我们就卖出当前天的 最终的结果就是我们的利润总和
 */
console.log('==================股票最佳购买时机非贪心算法==================');
console.log(maxProfitMore([7, 1, 5, 8, 3, 6, 4]));
console.log('=============================================');
/**
 * 4： 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 要求O(1)的空间复杂度，对原数组进行操作
 *
 */
var rotate = function (nums, k) {
    // 循环k,通过k我们可以确定需要移动的次数
    for (var i = 0; i < k; i++) {
        // 先在前面插入我们需要移动的地方
        nums.unshift(nums[nums.length - 1 - i]);
    }
    // 最后再去处理我们的数组
    nums.splice(nums.length - k, k);
};
rotate([1, 2, 3, 4, 5, 6, 7], 3);
/**
 * 5： 存在重复
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 *
 * 这个一定不是最优解
 */
var containsDuplicate = function (nums) {
    // 设置flag
    var judge = false;
    // 容错判断
    if (nums.length <= 1) {
        return judge;
    }
    // 通过最简单直白的去重的思想去处理
    var current = [];
    for (var i = 0; i < nums.length; i++) {
        if (current.indexOf(nums[i]) === -1) {
            current.push(nums[i]);
        }
        else {
            return judge = true;
        }
    }
    return judge;
};
console.log('================是否存在重复算法====================');
console.log(containsDuplicate([3, 1]));
console.log('====================================');
// 这个其实是非常常见而且简单得一个算法 但是要考虑到得情况多一点
/**
 * 6: 只出现一次得数字
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 你的算法应该具有线性时间复杂度。 不使用额外空间来实现
 */
var singleNumber = function (nums) {
    var index = -1;
    // 双层进行比对 目的是当前key和数组中的每一个key进行比较
    nums.forEach(function (key, j) {
        //每次循环小游标
        var count = 0;
        for (var k = 0; k < nums.length; k++) {
            if (key === nums[k]) {
                count += 1;
            }
            // 循环完找出符合条件的下标
            if (k === nums.length - 1 && count === 1) {
                index = j;
            }
        }
    });
    return nums[index];
};
console.log('=================查找单独数算法===================');
console.log(singleNumber([2, 2, 1, 3, 3]));
console.log('====================================');
/**
 * 7：求两个数组的交集
 */
var intersect = function (nums1, nums2) {
    var arr = [];
    for (var i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) !== -1) {
            nums2.splice(nums2.indexOf(nums1[i]), 1);
            arr.push(nums1[i]);
        }
    }
    return arr;
};
/**
 * 解析： 在求交集的过程中。主要的思想是关于什么是交集。
 * 两个数组的重合部分理论上来讲就是交集
 * 循环其中一个数组nums1在后在另外一个数组nums2中比对是否出现，如果出现的话就删除nums2中出现过的数组（注意是修改nums2）
 */
intersect([1, 2, 2, 1], [2, 2]);
/**
 * 8：加1
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 */
var plusOne = function (nums) {
    var j = nums.length - 1;
    // js无法正常表示大于16位的整数【非科学计数】
    for (var i = nums.length - 1; i >= 0; i--) {
        // 开始逐个进行加法运算
        if (i == j) {
            // 大于10的情况
            if (nums[i] + 1 >= 10) {
                nums[i] = nums[i] + 1 - 10;
                j--;
                // 最后一次循环
                if (i === 0) {
                    nums.unshift(1);
                }
            }
            else {
                nums[j]++;
            }
        }
        else {
            break;
        }
    }
    console.log(nums);
    return nums;
};
/**
 * 解析： 如果使用太大的数的话转成数字再加1是不行的，我们需要对数组中的的单个数据进行运算，同样的是以辅助游标进行运算
 * 辅助游标j的主要作用是记录需要+1的位置，如果当前的下标不等于j那么就跳出了循环：同时也提高了性能
 */
console.log('================加1算法====================');
console.log(plusOne([8, 2, 1, , 1, 2, 2, 2, 3, 5, 5, 5, 5, 5, 2, 3, 4, 2, 3, 4, 5, 5, 5, 5, 2, 9]));
console.log('====================================');
/**
 * 9: 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 输入: [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 */
var moveZeroes = function (nums) {
    // 0出现的个数
    var j = 0;
    nums.forEach(function (el, index, arr) {
        if (nums[j] === 0) {
            nums.splice(j, 1);
            nums.push(0);
        }
        else {
            j++;
        }
    });
    console.log(nums);
};
/**
 * 解析： 新建一个小游标j 这个是用来标识0出现的地方，每次移动完之后小游标是不变化的，因为原数组已经修改所以要固定一下游标
 * 双游标法在算法真的很实用
 */
console.log('==================移动零算法==================');
moveZeroes([1, 2, 0, 0, 0, 1]);
console.log('====================================');
/**
 * 10: 找父亲节点
 * fid为0代表一级，fid如果和fid为0的cid相等的话代表二级 以此类推...
 */
var findArr = [
    { "fid": 0, "cid": 3, "flag": "最外层3" },
    { "fid": 0, "cid": 4, "flag": "最外层4" },
    { "fid": 4, "cid": 5, "flag": "最外层-4" },
    { "fid": 5, "cid": 6, "flag": "最外层-4-1" },
    { "fid": 0, "cid": 7, "flag": "最外层7" },
    { "fid": 7, "cid": 8, "flag": "最外层-7" },
    { "fid": 0, "cid": 9, "flag": "最外层9" },
    { "fid": 9, "cid": 10, "flag": "最外层9-1" },
    { "fid": 9, "cid": 11, "flag": "最外层9-2" },
    { "fid": 11, "cid": 12, "flag": "最外层9-2-1" }
];
/**
 * 第一种方法：双递归方式
 * @param arr
 */
var findfid = function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var flagId = arr[i].cid; // 取出来一个flag 这个是用于和下一个级别匹配的
        for (var j = 0; j < arr.length; j++) {
            var elJ = arr[j];
            if (elJ.fid === flagId) { // fid 和 上级id 匹配
                (arr[i].children = []).push(elJ);
            }
        }
        // 只存入第一等级
        arr[i].fid === 0 && newArr.push(arr[i]);
    }
    return newArr;
};
/**
 * 第二种方法： 使用对象存储id 然后和fid进行对比
 * @param arr
 */
var findfidByObj = function (arr) {
    var newArr = [];
    var flagObj = {};
    arr.forEach(function (v) {
        flagObj[v.cid] = v;
    });
    arr.forEach(function (item) {
        // 根据当前遍历对象的fid,去map对象中找到对应索引的id
        var top = flagObj[item.fid];
        if (top) {
            // 如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
            (top.children || (top.children = [])).push(item);
        }
        else {
            // 如果没有在map中找到对应的索引ID,那么直接把当前的item添加到newData结果集中作为顶级
            newArr.push(item);
        }
    });
    return newArr;
};
console.log('====================================');
console.log('找父亲节点方式');
console.log(findfid(findArr));
console.log(findfidByObj(findArr));
console.log('====================================');
/**
 * 11：两数之和
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 例如：
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 */
/**
 * 第一种解法
 * @param nums
 * @param target
 */
var twoSumA = function (nums, target) {
    console.log('两数求和第一种解法');
    var arr = [0, 0], flag = false;
    for (var i = 0; i < nums.length; i++) {
        compare(i);
        if (flag) {
            arr = [i, compare(i)];
            break;
        }
    }
    /**
     * @param num
     */
    function compare(index) {
        for (var j = 0; j < nums.length; j++) {
            if (j !== index && nums[index] + nums[j] === target) {
                flag = true;
                return j;
            }
        }
    }
    return arr;
};
/**
 * 第二种解法
 */
var twoSumB = function (nums, target) {
    var arr = [0, 0];
    console.log('两数求和第二种解法');
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (j !== i && nums[i] + nums[j] === target) {
                return arr = [i, j];
            }
        }
    }
    return arr;
};
// 在进行一个数组中两个数得比较中：一定要注意在相加得时候要排除自身去进行相加。
console.log('=================两数之和算法===================');
console.log(twoSumA([3, 2, 4], 6));
console.log(twoSumB([2, 7, 11, 15], 9));
console.log('====================================');
/**
 * 12：有效得数独
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 1：数字 1-9 在每一行只能出现一次。
 * 2：数字 1-9 在每一列只能出现一次
 * 3：数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 例如
 * 输入
 * [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]
  输出: true
 */
var board = /* [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]*/ [["7", ".", ".", ".", "4", ".", ".", ".", "."],
    [".", ".", ".", "8", "6", "5", ".", ".", "."],
    [".", "1", ".", "2", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "9", ".", ".", "."],
    [".", ".", ".", ".", "5", ".", "5", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
];
var isValidSudoku = function (board) {
    var isPass = true;
    var sudokuDeep = 9; // 数独深度
    // 判断行和列
    for (var i = 0; i < sudokuDeep; i++) {
        var row = {};
        var col = {};
        for (var j = 0; j < sudokuDeep; j++) {
            // 判断行
            /**
             * 判断方式
             * 首先判断不为. => 判断是否存在row对象中
             */
            if (board[i][j] !== '.') {
                if (row[board[i][j]]) {
                    console.log(board[i][j]);
                    return isPass = false;
                }
                else {
                    row[board[i][j]] = board[i][j];
                }
            }
            // 判断列
            if (board[j][i] !== '.') {
                if (col[board[j][i]]) {
                    console.log(board[j][i]);
                    return isPass = false;
                }
                else {
                    col[board[j][i]] = board[j][i];
                }
            }
            // 判断九宫格 通过余数的形式判断出来当前所处的9宫格
            // 先计算出位置
            var c = Math.floor(i / 3); // col位置
            var r = Math.floor(j / 3); // row 位置
            // 勾勒出九宫格
            for (var m = c * 3; m < c * 3 + 3; m++) {
                for (var n = r * 3; n < r * 3 + 3; n++) {
                    if (m === i && n === j) {
                        // m === i && n === j 这时指向同一个位置
                        continue;
                    }
                    else {
                        // 最重要的一次求值判断
                        if (board[m][n] != '.' && board[i][j] !== '.' && (board[i][j]) === board[m][n]) {
                            return isPass = false;
                        }
                    }
                }
            }
        }
    }
    return isPass;
};
console.log('=================有效数独算法结果===================');
console.log(isValidSudoku(board));
console.log('====================================');
/**
 * 13： 旋转图像
 * 给定一个 n × n 的二维矩阵表示一个图像。
 * 将图像顺时针旋转 90 度。
 * 说明：
 * ⭐：你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 * 示例：
 * 给定：
 * matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
 * ]
 * 旋转完
 * matrix = [
    [7,4,1],
    [8,5,2],
    [9,6,3]
 * ]
 */
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// 
/* const matrix = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
] */
var rotateMaps = function (matrix) {
    var n = matrix.length;
    // 倒叙循环进行90度的反转
    for (var i = n - 1; i >= 0; i--) {
        // 新数组补位到原数组中，为了是实现原地的旋转操作，如果不需要
        for (var j = 0; j < n; j++) {
            // console.log(`当前坐标[${i},${j}]`)
            var current = matrix[i][j];
            matrix[j].push(current);
            // 没完成一组的赋值操作，就删除旋转前数组
            if (j === n - 1) {
                matrix[i].splice(0, n);
            }
        }
    }
    console.log(matrix);
    // return matrix
};
console.log('================旋转图像算法====================');
console.log(rotateMaps(matrix));
console.log('====================================');
console.warn("leet code Array \u4E13\u9898\u7ED3\u675F");
require("./Algorithm_str.ts");
console.warn(' ------------------------------------算法专题end----------------------------------');
