/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 *
 * https://leetcode-cn.com/problems/power-of-four/description/
 *
 * algorithms
 * Easy (44.95%)
 * Total Accepted:    6.8K
 * Total Submissions: 15.1K
 * Testcase Example:  '16'
 *
 * 给定一个整数 (32 位有符号整数)，请编写一个函数来判断它是否是 4 的幂次方。
 * 
 * 示例 1:
 * 
 * 输入: 16
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: 5
 * 输出: false
 * 
 * 进阶：
 * 你能不使用循环或者递归来完成本题吗？
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    //注意一个是等于0，一个是不等于0
    return ((num & (num - 1)) === 0) && ((num & 0x55555555) !== 0);
};

