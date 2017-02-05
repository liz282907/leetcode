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
var maxDepth = function(root) {
    if(!root) return 0;
    if(!(root.left) && !(root.right)) return 1;

    return Math.max(maxDepth(root.left),maxDepth(root.right))+1;
};

/**
非递归解法，用层次遍历。每一层计算高度+1.存储一个最大高度

*/