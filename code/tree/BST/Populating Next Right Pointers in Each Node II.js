/**
 * Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
Subscribe to see which companies asked this question.
 */
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 * 思路： 用prev去连接节点，考虑每一层，当进入该层的时候，prev,nextLevel置空，
 * 对当前root节点来说，prev指向它的下一层中上一个刚操作完的节点，由prev去连接节点，并依次next到下一个节点。
 * 内侧循环为本层节点的遍历，root=null，时，说明本层结束，root用nextLevel赋值。nextLevel是刚进入该层第一个
 * 节点时所赋值的。
 * 本题思路同样适用于populating next right pointers in each node题。O(n)时间复杂度
 */

var connect = function(root) {
    
    while(root){
    	var nextLevel = null,prev = null;
    	while(root){
    		if(!nextLevel) nextLevel = root.left || root.right;
    		if(root.left) {
    			if(prev) prev.next = root.left
    			prev = root.left;
    		}
    		if(root.right){
    			if(prev) prev.next = root.right;
    			prev = root.right
    		}
    		root = root.next;
    	}
    	//本层结束
    	root = nextLevel;
    }
};


















