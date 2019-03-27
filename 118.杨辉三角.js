/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (60.67%)
 * Total Accepted:    18.8K
 * Total Submissions: 31K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 * 
 * 
 * 
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 * 
 * 示例:
 * 
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 * 
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(rowIndex) {
    if(rowIndex === 0) return [];
    let result = [[1]];
    let output = [1];
    for(let i = 1; i < rowIndex; i++) {
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
        result.push(output.concat([]));
    }
    return result;
};

