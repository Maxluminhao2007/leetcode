/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode-cn.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (54.13%)
 * Total Accepted:    11.6K
 * Total Submissions: 21.4K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出: [1,3,3,1]
 * 
 * 
 * 进阶：
 * 
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 * 
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let output = [1];
    for(let i = 1; i <= rowIndex; i++) {
        let len = output.length;
        let tmp = output.concat([]);
        for(let j = 0; j < len; j++) {
            if(output[j + 1]) {
                output[j + 1] += tmp[j];
            }
            else {
                output[j + 1] = tmp[j];
            }
        }
    }
    return output;
};
