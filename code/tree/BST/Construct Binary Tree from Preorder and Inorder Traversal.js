/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 注意点： preorder或者inorder其中至少有一个为空的话，应该返回null
 */
var buildTree = function(preorder, inorder) {
	return buildByInAndPre(preorder,inorder);
    
    function buildByInAndPre(preorder,inorder){
        if(!preorder.length || !inorder.length) return null;  //注意别忘了是length..这边是数组，不是node...
    	var cur = preorder.shift();
    	for(var i=0;i<inorder.length;i++){
    		if(inorder[i]===cur) break;
    	}
    	var leftLength = i,rightLength = inorder.length-i-1;
    	var root = new TreeNode(cur);
    	root.left = buildTree(preorder.slice(0,leftLength),inorder.slice(0,leftLength));
    	root.right = buildTree(preorder.slice(leftLength),inorder.slice(leftLength+1));
    	return root;
    }
};