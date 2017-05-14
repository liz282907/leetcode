/**
 * 操作给定的二叉树，将其变换为源二叉树的镜像。 
输入描述:
二叉树的镜像定义：源二叉树 
    	    8
    	   /  \
    	  6   10
    	 / \  / \
    	5  7 9 11
    	镜像二叉树
    	    8
    	   /  \
    	  10   6
    	 / \  / \
    	11 9 7  5
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    if(!root) return root;

    var left = Mirror(root.left);
    var right = Mirror(root.right);
    root.left = right;
    root.right = left;
    return root;
}
module.exports = {
    Mirror : Mirror
};