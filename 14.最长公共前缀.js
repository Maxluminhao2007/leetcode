/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.32%)
 * Total Accepted:    62.1K
 * Total Submissions: 191.3K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //指针
    let index = 0;
    //指针指向的字母
    let lastChar = '';
    //结果
    let preStr = '';
    //长度为0，返回空字符串
    if(strs.length === 0) {
        return "";
    //长度为1，返回本身
    }else if(strs.length === 1) {
        return strs[0]
    //长度大于1
    }else {
    //指针不超过第一个字符串长度（局部最优，减少循环次数，因为最长前缀也肯定是第一个字符串的子字符串）
        while(index < strs[0].length) {
            //遍历字符串数组中每个字符串的第index个字母，是否完全相同的标志
            let flag = true;
            //遍历
            for(let i = 0; i < strs.length; i++) {
            //如果第i个字符串的第index个字母存在
                if(strs[i][index]) {
                    //如果当前是第0个字符串
                    if(i === 0) {
                        //那就把它的第0个字母当做索引字母
                        lastChar = strs[i][index];
                    }else {
                        //不是第0个字母，就和索引字母比较，不相等就置标志为false，且跳出循环，不用再比了
                        if(strs[i][index] !== lastChar) {
                            flag = false;
                            break;
                        }
                    }
            //如果第i个字符串的第index个字母不存在，不用再比了，跳出循环，flag置false
                }else {
                    flag = false;
                    break;
                }
            }
            //根据flag判断这一趟是正常走完了跳出的还是中间不相等跳出的，如果是正常跳出的就把索引字母加到前缀字符串中，不相等跳出的就不用再比了
            if(flag) {
                preStr += lastChar;
            }else {
                return preStr
            }
            //循环自增量
            index++;
        }
        //正常跳出while循环的情况
        return preStr
    }

};
// console.log(longestCommonPrefix(["get", 'get']));
