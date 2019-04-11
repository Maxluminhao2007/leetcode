/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
 *
 * https://leetcode-cn.com/problems/path-sum-iii/description/
 *
 * algorithms
 * Easy (48.17%)
 * Total Accepted:    4.3K
 * Total Submissions: 8.9K
 * Testcase Example:  '[10,5,-3,3,2,null,11,3,-2,null,1]\n8'
 *
 * 给定一个二叉树，它的每个结点都存放着一个整数值。
 * 
 * 找出路径和等于给定数值的路径总数。
 * 
 * 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
 * 
 * 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。
 * 
 * 示例：
 * 
 * root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
 * 
 * ⁠     10
 * ⁠    /  \
 * ⁠   5   -3
 * ⁠  / \    \
 * ⁠ 3   2   11
 * ⁠/ \   \
 * 3  -2   1
 * 
 * 返回 3。和等于 8 的路径有:
 * 
 * 1.  5 -> 3
 * 2.  5 -> 2 -> 1
 * 3.  -3 -> 11
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if(!root) return 0;
    let count = 0;
    let stack = [];
    let dfs = function(root, cur) {
            //当前路径和等于从根节点到此节点的val和
            let curSum = cur + root.val;
            //遍历栈，子路径和等于根到此节点的路径和 - 根到父节点的路径和
            if(curSum === sum) count++;
            for(let i = 0 ; i < stack.length; i++) {
                if(curSum - stack[i] === sum)
                count++;
            }
            //当前路径和入栈备用
            stack.push(curSum);
            //用完了就弹出
            if(root.left) {
                dfs(root.left, cur + root.val)
                stack.pop()
            }
            if(root.right) {
                dfs(root.right, cur + root.val)
                stack.pop();
            }
            
    }
    dfs(root, 0);
    return count;
};

