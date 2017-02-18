/**
 * Given a binary tree, flatten it to a linked list in-place.

For example,
Given

         1
        / \
       2   5
      / \   \
     3   4   6
The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6
click to show hints.

Subscribe to see which companies asked this question.

Show Tags

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
 * @return {void} Do not return anything, modify root in-place instead.
 * 楼主看的hint....思路就是每个节点的right都指向pre-order的下一个，最保险的做法...traverse以后形成一个
 * 数组，然后连接....下面楼主会改进，在遍历的同时进行处理
 * 
 */
var flatten = function(root) {
	var arr = [];
	traversal(root);
	var prev = null;
	while(arr.length){
		var cur = arr.pop();
		cur.left = null;
		cur.right = prev;
		prev = cur;
	}
    
    function traversal(root) {
    	if(!root) return
    	arr.push(root);
    	if(root.left) traversal(root.left);
    	if(root.right) traversal(root.right);
    }
};

//递归不加arr空间的版本，对root的左右子树都处理，root的左子树的right应该指向转变
//后的右子树的根节点，然后root.right = newLeft,root.left = null
var flatten = function(root) {
	traversal(root);
	
    function traversal(root) {
    	if(!root) return null;

    	//root与左子树的连接
    	var prevRight = traversal(root.right);
    	root.right = traversal(root.left);
    	root.left = null;
    
    	//左子树与右子树的连接
    	var temp = root;
    	while(temp && temp.right){
    		temp = temp.right;
    	}
    	if(temp) temp.right = prevRight;
    	
    	return root;
    }

};




