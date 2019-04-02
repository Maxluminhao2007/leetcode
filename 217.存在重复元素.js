/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 *
 * https://leetcode-cn.com/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (47.54%)
 * Total Accepted:    49K
 * Total Submissions: 103.1K
 * Testcase Example:  '[1,2,3,1]'
 *
 * 给定一个整数数组，判断是否存在重复元素。
 * 
 * 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,1]
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: [1,2,3,4]
 * 输出: false
 * 
 * 示例 3:
 * 
 * 输入: [1,1,1,3,3,4,3,2,4,2]
 * 输出: true
 * 
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
//这个解法是错误的有瑕疵的，解释见笔记
// var containsDuplicate = function(nums) {
//     let obj = {};
//     nums.forEach(function(x) {
//         obj[x] = obj[x] + 1 || 1;
//         //这一部分可以被替换成上面的一句话
//         // if(obj[x]) obj[x]++;
//         // else obj[x] = 1;
//         //在这里判断大小
//         if(obj[x] > 1) return true;
//     })
//     //这一步是冗余的，因为可以在初始化的过程中判断大小
//     // for(name in obj) {
//     //     if(obj[name] > 1) return true;
//     // }
//     return false;
// };
var containsDuplicate = function(nums) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        let x = nums[i];
        obj[x] = obj[x] + 1 || 1;
        if(obj[x] > 1) return true;
    }
    return false;
};
