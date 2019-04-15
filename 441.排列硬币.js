/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 *
 * https://leetcode-cn.com/problems/arranging-coins/description/
 *
 * algorithms
 * Easy (36.47%)
 * Total Accepted:    6.2K
 * Total Submissions: 16.9K
 * Testcase Example:  '5'
 *
 * 你总共有 n 枚硬币，你需要将它们摆成一个阶梯形状，第 k 行就必须正好有 k 枚硬币。
 * 
 * 给定一个数字 n，找出可形成完整阶梯行的总行数。
 * 
 * n 是一个非负整数，并且在32位有符号整型的范围内。
 * 
 * 示例 1:
 * 
 * 
 * n = 5
 * 
 * 硬币可排列成以下几行:
 * ¤
 * ¤ ¤
 * ¤ ¤
 * 
 * 因为第三行不完整，所以返回2.
 * 
 * 
 * 示例 2:
 * 
 * 
 * n = 8
 * 
 * 硬币可排列成以下几行:
 * ¤
 * ¤ ¤
 * ¤ ¤ ¤
 * ¤ ¤
 * 
 * 因为第四行不完整，所以返回3.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let [left, right] = [0, n];
    while(left < right) {
        let mid = ((left + right) / 2) >> 0;
        //1 + 2 + …… + k <= n <= 1 + 2 + …… + k + (k + 1)
        //如果找到了这个k，且完全等于右边界，则最后一行是完整的
        //如果不完整，就舍去最后一行
        if(n >= mid * (mid + 1) / 2 && n <= (mid + 1) * (mid + 2) / 2) {
            if(n === (mid + 1) * (mid + 2) / 2) {
                return mid + 1;
            }else return mid;
        }
        //二分查找
        else if(n < mid * (mid + 1) / 2) {
            right = mid - 1;
        }else {
            left = mid + 1;
        }
    }
    return left;
};

