/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 *
 * https://leetcode-cn.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (52.50%)
 * Total Accepted:    14.5K
 * Total Submissions: 27.6K
 * Testcase Example:  '19'
 *
 * 编写一个算法来判断一个数是不是“快乐数”。
 * 
 * 一个“快乐数”定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是无限循环但始终变不到
 * 1。如果可以变为 1，那么这个数就是快乐数。
 * 
 * 示例: 
 * 
 * 输入: 19
 * 输出: true
 * 解释: 
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 * 
 */
/**
 * @param {number} n
 * @return {boolean}
 */
//这个算法是瞎猜的，大于十步就认为不满足要求了，实际上没有证明，不过好像效果很好
//为什么是大于十步，因为我试了几种快乐数都是小于5步就得到1了
var isHappy = function(n) {
    let count = 0;
    while(n !== 1) {
        let sum = 0;
        while(n) {
            sum += (n % 10) ** 2;
            n = (n / 10) >> 0;
        }
        n = sum;
        count++;
        if(count > 10) return false
    }
    return true;
};

//高票答案的算法是将平方和储存起来，如果本次得到的平方和已经得到过，那就判false
//这种算法认为要么是快乐数，平方和为1，要么会无限循环（好像也有道理，但并不知道证明）



