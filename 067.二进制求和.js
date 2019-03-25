/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (47.15%)
 * Total Accepted:    19.4K
 * Total Submissions: 41K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a.length < b.length? [a, b] = [b, a] :'';
    carry = 0;
    a = a.split('').map((value) => Number.parseInt(value));
    b = b.split('').map((value) => Number.parseInt(value));
    let index = 0;
    while(index < b.length || index < a.length) {
        let tmpB = b[b.length - 1 - index];
        if(index >= b.length) tmpB = 0;
        let sum = a[a.length - 1 - index] + tmpB + carry;
        a[a.length - 1 - index] = (sum % 2).toString();
        carry = Math.floor(sum / 2);
        index++;
    }
    if(carry === 1) a.unshift('1');
    return a.join('');
};
    // console.log(addBinary('1010', '1011'))
