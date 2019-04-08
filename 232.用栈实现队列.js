/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 *
 * https://leetcode-cn.com/problems/implement-stack-using-queues/description/
 *
 * algorithms
 * Easy (57.08%)
 * Total Accepted:    8K
 * Total Submissions: 14K
 * Testcase Example:  '["MyStack","push","push","top","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * 使用队列实现栈的下列操作：
 * 
 * 
 * push(x) -- 元素 x 入栈
 * pop() -- 移除栈顶元素
 * top() -- 获取栈顶元素
 * empty() -- 返回栈是否为空
 * 
 * 
 * 注意:
 * 
 * 
 * 你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty
 * 这些操作是合法的。
 * 你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
 * 你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
 * 
 * 
 */
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queue1 = [];
    this.queue2 = [];
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    if(!this.queue1.length && !this.queue2.length) this.queue1.push(x);
    else {
        let tmp = this.queue1.length !== 0? this.queue1 : this.queue2;
        tmp.push(x);
    }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let tmp1 = this.queue1.length !== 0? this.queue1 : this.queue2;
    let tmp2 = this.queue1.length !== 0? this.queue2 : this.queue1;
    if(tmp1.length === 1) return tmp1.shift();
    else {
        while(tmp1.length !== 1) {
            tmp2.push(tmp1.shift());
        }
    }
    return tmp1.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    let tmp = this.queue1.length !== 0? this.queue1 : this.queue2;
    return tmp[tmp.length - 1];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return !this.queue1.length && !this.queue2.length
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

