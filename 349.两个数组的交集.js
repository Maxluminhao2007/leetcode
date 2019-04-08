/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (61.33%)
 * Total Accepted:    17K
 * Total Submissions: 27.8K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
 * 示例 1:
 * 
 * 输入: nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出: [2]
 * 
 * 
 * 示例 2:
 * 
 * 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出: [9,4]
 * 
 * 说明:
 * 
 * 
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//自己的傻蛋解法
// var intersection = function(nums1, nums2) {
//     let result = {};
//     [nums1, nums2] = nums1.length < nums2.length? [nums1, nums2]:[nums2, nums1]
//     for(let i = 0; i < nums1.length; i++) {
//         if(result[nums1[i]]=== undefined && nums2.indexOf(nums1[i]) !== -1) 
//         result[nums1[i]] = true;
//     }
//     return Object.getOwnPropertyNames(result).map(c => parseInt(c, 10))
// };
var intersection = function(nums1, nums2) {
    //es6新语法 严格1对1的map
    let map = new Map;
    for(let n of nums1) {
        if(!map.has(n))map.set(n, 1);
    }
    let res = [];
    for(let n of nums2) {
        if(map.has(n) && map.get(n) > 0) {
            res.push(n)
            map.set(n, map.get(n) - 1)
        }
    }
    return res;
};
