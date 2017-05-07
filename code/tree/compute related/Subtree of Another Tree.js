/**
 * Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 * contest 31,problem2:
 * 思路： 递归。两层遍历。一个小的点是去判断两棵树是否相等，isSame，以这个为基础再去遍历原s树。注意后序遍历会比较好，避免一些重复计算
 * 然后注意递归终止条件
 */
var isSubtree = function(s, t) {

	if(!s && t) return false; 
	var left = isSubtree(s.left,t) ,
		right = isSubtree(s.right,t);
    return left || right || (isSame(s.left, t) || isSame(s.right, t) ||isSame(s, t));


    function isSame(s, t) {
        if (!s && !t) return true;
        if (s && !t || !s && t) return false;
        if (s.val !== t.val) return false;

        return isSame(s.left, t.left) && isSame(s.right, t.right)
    }
};
