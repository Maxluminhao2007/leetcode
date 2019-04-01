/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (39.88%)
 * Total Accepted:    19.7K
 * Total Submissions: 49.5K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    //新建一个头节点，使所有节点需要进行的操作一致，即正规化所有节点
    let init = new ListNode(-1);
    init.next = head;
    let pre = init;
    let cur = init.next;
    while(cur) {
        if(cur.val === val) {
            cur = cur.next;
            pre.next = cur;
        }else {
            cur = cur.next;
            pre = pre.next;
        }
    }

    return init.next;
};

