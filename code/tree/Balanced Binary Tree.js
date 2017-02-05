/*
For this problem, a height-balanced binary tree is defined as a binary tree in which the
depth of the two subtrees of every node never differ by more than 1.
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
 * @return {boolean}
思路跟计算最大高度一样，但是需要注意的是，不光要判断自身是否平衡，还得判断子树是否平衡。因为题中要求每一颗都得是平衡二叉树。
 */
 //递归解法
var isBalanced = function(root) {

    if(!root) return true;
    //后两个判断不能舍去。
    return Math.abs(height(root.left) - height(root.right))<=1 && isBalanced(root.left) && isBalanced(root.right);

    function height(node){
        if(!node) return 0;
        if(!(node.left) && !(node.right)) return 1;

        return Math.max(height(node.left),height(node.right))+1;
    }
};

//非递归解法
//todo
var isBalanced = function(root) {




};
