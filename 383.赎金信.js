/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 *
 * https://leetcode-cn.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (46.40%)
 * Total Accepted:    5.8K
 * Total Submissions: 12.5K
 * Testcase Example:  '"a"\n"b"'
 *
 * 给定一个赎金信 (ransom)
 * 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。如果可以构成，返回
 * true ；否则返回 false。
 * 
 * (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)
 * 
 * 注意：
 * 
 * 你可以假设两个字符串均只含有小写字母。
 * 
 * 
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 * 
 * 
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map;
    for(let c of magazine) {
        if(!map.has(c)){
            map.set(c, 1);
        }else {
            map.set(c, map.get(c) + 1);
        }
    }

    for(let c of ransomNote) {
        if(map.has(c) && map.get(c) > 0) {
            map.set(c, map.get(c) - 1);
        }else {
            return false;
        }
    }
    return true;
};
//high vote solution.  hashmap 26 character
// var canConstruct = function(ransomNote, magazine) {
//     var arr = Array(26).fill(0);
//     for( let m of magazine){
//         arr[m.charCodeAt(0)-97]++
//     }
//     for(let r of ransomNote){
//         if(--arr[r.charCodeAt(0)-97]<0){
//             return false
//         }
//     }
//      return true
// };

