/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode-cn.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (40.09%)
 * Total Accepted:    7.7K
 * Total Submissions: 19.3K
 * Testcase Example:  '16'
 *
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
 * 
 * 说明：不要使用任何内置的库函数，如  sqrt。
 * 
 * 示例 1：
 * 
 * 输入：16
 * 输出：True
 * 
 * 示例 2：
 * 
 * 输入：14
 * 输出：False
 * 
 * 
 */
/**
 * @param {number} num
 * @return {boolean}
 */
// var isPerfectSquare = function(num) {
//     let i = -1;
//     //所有的完全平方数都可以表示为从1开始的奇数和
//     while(num > 0) {
//         num -= (i += 2);
//     }
//     return num === 0;
// };

//二分法找这个平方根 找不到就返回false
var isPerfectSquare = function(num) {
    let left = 1;
    let right = num;

    while(left <= right) {
        //除以2取整
        let mid = (left + right) >>> 1;
        let multi = mid * mid;
        if(multi > num) {
            right = mid - 1;
        }else if(multi < num) {
            left = mid + 1;
        }else return true;
    }
    return false;
};

