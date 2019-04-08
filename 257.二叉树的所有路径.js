/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 *
 * https://leetcode-cn.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (57.45%)
 * Total Accepted:    7.5K
 * Total Submissions: 13K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 给定一个二叉树，返回所有从根节点到叶子节点的路径。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例:
 * 
 * 输入:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * 输出: ["1->2->5", "1->3"]
 * 
 * 解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let path = [];
    let singlePath = [];
    let dfs = function(root) {
        //如果这个节点不为空
        if(root) {
            //把这个节点推入singlePath中备用
            singlePath.push(root.val);
            //同时判断是不是叶子结点，如果是，就把它当做是一条完整路径推入结果数组
            if(!root.left && !root.right)
            path.push(singlePath.join('->'));
            //然后遍历左子树和右子树
            dfs(root.left);
            dfs(root.right);
            //遍历完左右子树之后这个节点没用了扔掉
            singlePath.pop();
        }
    }
    dfs(root);
    return path;
};

