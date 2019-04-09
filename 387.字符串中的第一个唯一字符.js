/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (37.20%)
 * Total Accepted:    25.9K
 * Total Submissions: 69.6K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * 案例:
 * 
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 
 * 
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let obj = {};
    for(let i = 0; i < s.length; i++) {
        if(!obj[s[i]]) obj[s[i]] = [1, i];
        else {
            obj[s[i]][0]++;
        } 
    }
    let min = s.length;
    for(let name in obj) {
        if(obj[name][0] === 1) {
            if(obj[name][1] < min)
            min = obj[name][1];
        }
    }
    //最后min如果发生变化说明存在只出现一次的字符
    //没有变化说明都是好几次以上的，输出-1
    return min === s.length? -1:min;
};

