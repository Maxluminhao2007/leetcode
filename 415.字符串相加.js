/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (44.28%)
 * Total Accepted:    6.1K
 * Total Submissions: 13.8K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 注意：
 * 
 * 
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var addStrings = function(num1, num2) {
//     //num1是更长的那个
//     if(num2.length > num1.length) [num1, num2] = [num2, num1];
//     const transform  = (c) => c.charCodeAt(0) - 48;
//     [num1, num2] = [num1.split('').map(transform), num2.split('').map(transform)];
//     let carry = 0;
//     for(let i = 0; i < num2.length || carry > 0; i++) {
//         let tmp = num1[num1.length - 1 - i] + (num2[num2.length - 1 - i] === undefined?0:num2[num2.length - 1 - i]) + carry; 
//         carry = (tmp / 10) >> 0;
//         num1[num1.length - 1 - i] = tmp % 10;
//         if(isNaN(tmp)) num1.unshift(1);
//     }
//     return num1.join('');

// };

var addStrings = function(num1, num2) {
    //不需要找更长的那个，只需要对齐就好，也不需要像上方那样保留更长的，只需要新建一个就好
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let res = '';
    for(;i >= 0 || j >= 0 || carry > 0;i--, j--) {
        let digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
        let digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
        let sum = digit1 + digit2 + carry;
        res = `${sum % 10}${res}`;
        carry = (sum / 10) >> 0;
    }
    return res;
};
