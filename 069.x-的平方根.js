/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 *
 * https://leetcode-cn.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (35.08%)
 * Total Accepted:    27.9K
 * Total Submissions: 79.5K
 * Testcase Example:  '4'
 *
 * 实现 int sqrt(int x) 函数。
 * 
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 * 
 * 示例 1:
 * 
 * 输入: 4
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 8
 * 输出: 2
 * 说明: 8 的平方根是 2.82842..., 
 * 由于返回类型是整数，小数部分将被舍去。
 * 
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 ||x === 1) return x;
    let left = 1;
    let right = Math.floor(x / 2) + 1;
    let mid = Math.floor((left + right)/2);
    while(left + 1 != right) {
        if(mid * mid > x) {
            right = mid;
        }else {
            left = mid;
        }
        mid = Math.floor((right + left)/2)
    }
    return left;
};
console.log(mySqrt(1));
