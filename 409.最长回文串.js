/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 *
 * https://leetcode-cn.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (46.96%)
 * Total Accepted:    4.7K
 * Total Submissions: 9.9K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 * 
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 * 
 * 注意:
 * 假设字符串的长度不会超过 1010。
 * 
 * 示例 1: 
 * 
 * 
 * 输入:
 * "abccccdd"
 * 
 * 输出:
 * 7
 * 
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let tab = Array(52).fill(0);
    for(let c of s) {
        let tmp = c.charCodeAt(0);
        if(tmp >= 97) tmp -= 97;
        else tmp = tmp - 39;
        tab[tmp]++;
    }
    let flag = false;
    return tab.reduce((pre, cur) => {
        //双数都能用上
        if(cur % 2 === 0) {
            return pre + cur;
        //单数只用-1 的部分
        }else {
            flag = true;
            return pre + cur - 1;
        }
        //如果有单数，拿出一个1来放在中间
    },0) + (flag === true ? 1: 0);
};

