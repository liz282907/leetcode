/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Subscribe to see which companies asked this question.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 思路，跟Lowest Common Ancestor of a Binary Tree Add to List一样，解法通用，

 */
var lowestCommonAncestor = function(root, p, q) {
    if(root===p || root===q || !root) return root;
	var leftFound = lowestCommonAncestor(root.left,p,q),
		rightFound = lowestCommonAncestor(root.right,p,q);
	//右子树上
	if(!leftFound) return rightFound;
	if(!rightFound) return leftFound;
	return root;
};