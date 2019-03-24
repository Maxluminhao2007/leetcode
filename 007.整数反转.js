/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.94%)
 * Total Accepted:    99.8K
 * Total Submissions: 310.9K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = x.toString().split("");
    let sym = "";
    if(x === 0) return 0;
    if(x < 0) sym = temp.shift();
    temp = parseInt(sym + eraseZero(temp.reverse()).join(""));
    if(temp > 2147483648 || temp < -2147483648)
    return 0;
    else return temp;

};

var eraseZero = function(arr) {
let count = 0;
while(arr[count] === '0') arr.shift();
return arr;
}


