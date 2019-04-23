/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 *
 * https://leetcode-cn.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Easy (53.74%)
 * Total Accepted:    3.7K
 * Total Submissions: 6.8K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * 给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k
 * 之间的距离相等（需要考虑元组的顺序）。
 * 
 * 找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。
 * 
 * 示例:
 * 
 * 
 * 输入:
 * [[0,0],[1,0],[2,0]]
 * 
 * 输出:
 * 2
 * 
 * 解释:
 * 两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 * 
 * 
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    let count = 0;
    
    for (let i = 0; i < points.length; i++) {
        const memory = {};

        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            
            //每多一个相等的距离，点数加1，但要注意总回旋镖数是增加了原有点数的2倍，可以尝试从2个点到3个点的过程
            const dist = Math.pow(points[i][0] - points[j][0],2) + Math.pow(points[i][1] - points[j][1],2);
            if (memory[dist]) count += memory[dist] * 2;
            
            memory[dist] ? memory[dist] += 1 : memory[dist] = 1;
        }
    }
    
    return count;
};
console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]) );
