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
var generate = function(numRows) {
    let init = [1];
    let output = [[1]]
    if(numRows === 1) return output;
    if(numRows === 0) return [];
    for(let i = 2; i <= numRows; i++) {
        //复制一份init
        let temp = init.concat([]);
        //init右移一位
        init.unshift(0);
        for(let j = 0; j < init.length; j++) {
            init[j] = temp[j]? (init[j] + temp[j]) :  init[j]
        }
        output.push(init.concat([]));
    }
    return output;
};

