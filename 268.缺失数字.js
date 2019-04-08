/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 *
 * https://leetcode-cn.com/problems/missing-number/description/
 *
 * algorithms
 * Easy (49.19%)
 * Total Accepted:    16.9K
 * Total Submissions: 34.4K
 * Testcase Example:  '[3,0,1]'
 *
 * 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
 * 
 * 示例 1:
 * 
 * 输入: [3,0,1]
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [9,6,4,2,3,5,7,0,1]
 * 输出: 8
 * 
 * 
 * 说明:
 * 你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
 *                                    
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//比较蠢的解法
// var missingNumber = function(nums) {
//     //利用reduce遍历nums，记录最大值和最小值，同时计算和
//     let result = nums.reduce(function(pre, cur) {
//         pre[0] += cur;
//         pre[1][0] = cur > pre[1][0] ? cur: pre[1][0];
//         pre[1][1] = cur < pre[1][1] ? cur: pre[1][1];
//         return pre;
//     }, [0, [-1, Number.MAX_SAFE_INTEGER]])
//     let sum = 0;
//     //根据最大值计算理论和
//     for(let i = 1; i <= result[1][0]; i++) sum += i;
//     //如果最小值不是0，那就少0；
//     //如果最小值是0，理论和实际和相等，那就少最大值+1，否则少两者之差
//     //例：[1]少0，[0,1]少2，[0,1,2,4]少3
//     return result[1][1] !== 0?0:(sum === result[0]?result[1][0]+1:sum-result[0]);
// };
var missingNumber = function(nums) {
    let result = nums.reduce(function(pre, cur, index) {
        return [pre[0] + cur, pre[1] + index + 1]
    },[0,0])
    return result[1] - result[0];
}


