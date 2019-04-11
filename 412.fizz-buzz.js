/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 *
 * https://leetcode-cn.com/problems/fizz-buzz/description/
 *
 * algorithms
 * Easy (58.54%)
 * Total Accepted:    11.9K
 * Total Submissions: 20.3K
 * Testcase Example:  '1'
 *
 * 写一个程序，输出从 1 到 n 数字的字符串表示。
 * 
 * 1. 如果 n 是3的倍数，输出“Fizz”；
 * 
 * 2. 如果 n 是5的倍数，输出“Buzz”；
 * 
 * 3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 * 
 * 示例：
 * 
 * n = 15,
 * 
 * 返回:
 * [
 * ⁠   "1",
 * ⁠   "2",
 * ⁠   "Fizz",
 * ⁠   "4",
 * ⁠   "Buzz",
 * ⁠   "Fizz",
 * ⁠   "7",
 * ⁠   "8",
 * ⁠   "Fizz",
 * ⁠   "Buzz",
 * ⁠   "11",
 * ⁠   "Fizz",
 * ⁠   "13",
 * ⁠   "14",
 * ⁠   "FizzBuzz"
 * ]
 * 
 * 
 */
/**
 * @param {number} n
 * @return {string[]}
 */
//这什么弱智题？
var fizzBuzz = function(n) {
    let res = [];
    for(let i = 1; i <= n; i++) {
        let tmp = '';
        tmp += i % 3 === 0 ? 'Fizz' : '';
        tmp += i % 5 === 0 ? 'Buzz' : '';
        tmp = tmp.length === 0 ? i.toString() : tmp;
        res.push(tmp);
    }
    return res;
};

