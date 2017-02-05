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
 思路： 判断左子树，右子树是否是bst,同时自身是否小于左边的最大值，右边的最小值。
 不能按照之前的方法写，因为会遇到每一颗子树都是BST,但实际上树间不满足的情况。因此最好从上到下去判断，而不是从下到上判断。
 当然，如果非要从下到上的话，需要记住左边的最大值，右边的最小值。
 case为 10 5 15 null null 6 20
 */
var isValidBST = function(root) {
    return isBST(root,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY);

    function isBST(node,leftBound,rightBound){
        if(!node) return true;
        return node.val > leftBound && node.val < rightBound
                && isBST(node.left,leftBound,node.val)
                && isBST(node.right,node.val,rightBound);
    }
};

/*
wrong method
var isValidBST = function(root) {
    if(!root) return true;

    var left = true,right = true;
    if(root.left) left = root.left.val<root.val && isValidBST(root.left);
    if(root.right) right = root.right.val>root.val && isValidBST(root.right);
    console.log(root.val,left,right)
    return left && right;
};

*/