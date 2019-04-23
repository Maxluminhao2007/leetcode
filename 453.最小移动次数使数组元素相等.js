/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小移动次数使数组元素相等
 *
 * https://leetcode-cn.com/problems/minimum-moves-to-equal-array-elements/description/
 *
 * algorithms
 * Easy (49.98%)
 * Total Accepted:    3.2K
 * Total Submissions: 6.3K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动可以使 n - 1 个元素增加 1。
 * 
 * 示例:
 * 
 * 
 * 输入:
 * [1,2,3]
 * 
 * 输出:
 * 3
 * 
 * 解释:
 * 只需要3次移动（注意每次移动会增加两个元素的值）：
 * 
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    // //自己的写法
    // const {length} = nums;
    // let sum = 0;
    // let minValue = Number.MAX_SAFE_INTEGER;
    // sum = nums.reduce(function(pre, cur) {
    //     if(cur < minValue) {
    //         minValue = cur;
    //     }
    //     return pre + cur;
    // }, 0);
    // if(!sum && !minValue) return 0;
    // return sum - minValue * length

    //人家的写法
    let min = Math.min(...nums);
    return nums.reduce((pre, cur) => pre + cur - min, 0);
};
