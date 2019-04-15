/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 *
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Easy (36.33%)
 * Total Accepted:    4K
 * Total Submissions: 11.1K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 * 
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 * 
 * 说明：
 * 
 * 
 * 字母异位词指字母相同，但排列不同的字符串。
 * 不考虑答案输出的顺序。
 * 
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * s: "cbaebabacd" p: "abc"
 * 
 * 输出:
 * [0, 6]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:
 * s: "abab" p: "ab"
 * 
 * 输出:
 * [0, 1, 2]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let map = new Array(26).fill(0);
    //map是指p字符串中字符出现的次数，可以称作是备用量
    for(var i = 0;i < p.length; i++){
        map[p[i].charCodeAt() - 97]++;
    }
    
    let j=0;
    //结果数组
    let res=[];
    //遍历s字符串
    for(let i = 0;i < s.length; i++){
        //c等于当前指向字母的代表数值（0-25）
        let c = s[i].charCodeAt() - 97;
        //用掉这个字母，备用量减一
        map[c]--;
        //这一步是：
        //如果用掉这个字母导致map中此字母的备用量小于零（即原本不存在或用超了，比如p中只有一个a但用掉了两个a）
        //用来移动字符串的左指针j，同时还原map，并跳过p中不存在的字符（很精妙）
        while(map[c] < 0){
            let c2 = s[j++].charCodeAt() - 97;
            map[c2]++;
        }
        //i - j + 1是指当前由指针i 和指针j所确定的合理字符串的长度，这里的合理是指：可能会少，但不会用p字符串中不存在的字符
        if(i - j + 1 === p.length){
            res.push(j);
        }
    }
    
    return res;
};
