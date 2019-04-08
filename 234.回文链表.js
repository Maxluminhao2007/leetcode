/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 *
 * https://leetcode-cn.com/problems/palindrome-linked-list/description/
 *
 * algorithms
 * Easy (35.78%)
 * Total Accepted:    19.8K
 * Total Submissions: 55.2K
 * Testcase Example:  '[1,2]'
 *
 * 请判断一个链表是否为回文链表。
 * 
 * 示例 1:
 * 
 * 输入: 1->2
 * 输出: false
 * 
 * 示例 2:
 * 
 * 输入: 1->2->2->1
 * 输出: true
 * 
 * 
 * 进阶：
 * 你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    let slow = head;
    let fast = head;
    //快慢指针找中点
    while(fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //反转从slow开始的右半链表，不包括slow，用了三个指针
    let reverse = function(head) {
        let pre = null;
        let post = null;

        while(head != null) {
            post = head.next;
            head.next = pre;
            pre = head;
            head = post;
        }
        return pre;
    }

    slow.next = reverse(slow.next);

    slow = slow.next;
    while(slow != null) {
        if(head.val != slow.val) return false;
        head = head.next;
        slow = slow.next;
    }
    return true;
};

