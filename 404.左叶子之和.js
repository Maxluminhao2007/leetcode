/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (49.23%)
 * Total Accepted:    5.6K
 * Total Submissions: 11.3K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 * 
 * 示例：
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 * 
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
 * @return {number}
 */

//dfs遍历，很费时间，可以用迭代
var sumOfLeftLeaves = function(root) {
    if(!root || !(root.left || root.right)) return 0;
    let sum = 0;
    let dfs = function(root, father) {
        //此节点不为空
        //且是父节点的左子树，且是叶子结点
        if(root) {
            if(father.left === root && !(root.left || root.right)) {
                sum += root.val;
            }
            dfs(root.left, root);
            dfs(root.right, root);
        }
        
    }
    dfs(root.left, root);
    dfs(root.right, root);
    return sum;
};

