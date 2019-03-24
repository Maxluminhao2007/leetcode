/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.84%)
 * Total Accepted:    56.6K
 * Total Submissions: 152.8K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //边界情况
    if(s.length === '') 
        return ;
    //打表
    let table = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    //分离输入的字符串，到tmp数组里
    let tmpList = s.split('');
    //新建栈
    let stack = [];
    //当tmp数组不空，从tmp里shift一个数到stack里，如果推进去之后里边有超过两个数，就比较栈最外层的两个数，和表里对比，是一对就消掉，最后栈空说明都配对
    while(tmpList.length) {
        stack.push(tmpList.shift());
        if(stack.length > 1) {
            if(table[stack[stack.length - 1]] ===  stack[stack.length - 2]) {
                stack.pop();
                stack.pop();
            }
        }
    }
    if(stack.length === 0) {
        return true;
    }else {
        return false;
    }
};

// console.log(isValid("([)]"))
