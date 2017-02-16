/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
	return buildByInAndPost(inorder,postorder);
    
    function buildByInAndPost(inorder,postorder){
    	if(!inorder.length || !postorder.length) return null;
    	var cur = postorder.pop();
    	for(var i=0;i<inorder.length;i++){
    		if(inorder[i]===cur) break;
    	}
    	var leftLen = i,rightLen = inorder.length-i-1;
    	var root = new TreeNode(cur);
    	root.left = buildByInAndPost(inorder.slice(0,leftLen),postorder.slice(0,leftLen));
    	root.right = buildByInAndPost(inorder.slice(i+1),postorder.slice(i,i+rightLen));//注意这边的slice 是i+rightLen
    	return root;
    }
};