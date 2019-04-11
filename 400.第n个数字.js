/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第N个数字
 *
 * https://leetcode-cn.com/problems/nth-digit/description/
 *
 * algorithms
 * Easy (31.02%)
 * Total Accepted:    2.7K
 * Total Submissions: 8.6K
 * Testcase Example:  '3'
 *
 * 在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。
 * 
 * 注意:
 * n 是正数且在32为整形范围内 ( n < 2^31)。
 * 
 * 示例 1:
 * 
 * 
 * 输入:
 * 3
 * 
 * 输出:
 * 3
 * 
 * 
 * 示例 2:
 * 
 * 
 * 输入:
 * 11
 * 
 * 输出:
 * 0
 * 
 * 说明:
 * 第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    //10好像很特殊，把他单列出来
    if(n === 10) return 1;
    //arr储存此位及之前的位数和
    let arr = Array(15).fill(0);
    arr = [0,10,190,...arr];
    let i = 0;
    //如果比之前n总位数还要大，位数+1，储存起来
    while(arr[i] < n){
        i++;
        if(i > 2)
        arr[i] = arr[i - 1] + (i * 9 * 10 ** (i - 1))
    }
    if(i <= 1) return n;
    //这个数字段第j个数
    let j = ((n - arr[i - 1]) / i) >> 0;
    //第j个数的第k位，从第0位开始
    let k = (n - arr[i - 1]) % i;
    let num = j + 10 ** (i - 1);
    return num.toString()[k];

};

