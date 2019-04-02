/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode-cn.com/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (33.87%)
 * Total Accepted:    10.9K
 * Total Submissions: 32.3K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j
 * 的差的绝对值最大为 k。
 * 
 * 示例 1:
 * 
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 
 * 示例 3:
 * 
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//最简单的模拟法
// var containsNearbyDuplicate = function(nums, k) {
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = 1; j <= k; j++) {
//             if(i + j === nums.length) break;
//             if(nums[i] === nums[i + j]) return true;
//         }
//     }
//     return false;
// };
var containsNearbyDuplicate = function(nums, k) {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        let x = nums[i];
        if(obj[x] !== undefined) {
            if(i - obj[x] <= k) return true;
            //注意这个操作
            else obj[x] = i;
        }else {
            obj[x] = i;
        }
    }
    return false;
};
