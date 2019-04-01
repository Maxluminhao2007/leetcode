/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (26.93%)
 * Total Accepted:    14.7K
 * Total Submissions: 54.7K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 示例:
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
//普通方法
// var countPrimes = function(n) {
//     let count = 0;
//     let isPrime = function(number) {
//         let sqrt = (Math.sqrt(number))>>0;
//         for(let i = 2; i <= sqrt; i++) {
//             if(number % i === 0) return false;
//         }
//         return true;
//     }
//     for(let i = 2; i < n; i ++) {
//         if(isPrime(i)) {
//             count++;
//         }
//     }
//     return count;
// };
//筛法
var countPrimes = function(n) {
    if(n <= 2) return 0;
    if(n === 3) return 1;
    let notPrimes = new Array(n).fill(false);
    let count = 0;
    for(let i = 2; i < n; i++) {
        if(notPrimes[i]) continue;
        count++;

        for(let j = 2; j < n; j++) {
            let num = i * j;
            if(num > n) break;
            notPrimes[num] = true;
        }
    }
    return count;
}
