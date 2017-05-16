/**
 * Given a complete binary tree, count the number of nodes.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

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
 * @return {number}
 * 思路，层次遍历，超时...
 */
var countNodes = function(root) {
    
    if(!root) return 0;

    var stack = [root],count = 0;
    while(stack.length){
    	var cur = stack.shift();
    	count++;
    	if(cur.left) stack.push(cur.left);
    	if(cur.right) stack.push(cur.right);
    }
    return count;
};

//思路： 基于先序遍历。但是中间的计算做了处理，因为right始终<=left的高度，因此当right到null的时候，也就是说到
//最后一层的时候，看left是否还有，如果没有的话，说明是一个完美二叉树，用公式计算即可。
//但是如果有的话，就是完全二叉树，按照常规的计算即可。
//lgn * lgn   n个节点，遍历用了lgn,每次遍历算了lgn次（从上到下left-left）
//关于时间复杂度的计算，最好情况是，是一个完美二叉树，那么lgn
//最坏情况是左子树是一个完美，那么直接计算就好，T(n) = lgn + (同时的常数复杂度) + T(n/2)
//T(n) = T(n/2) + c1 lgn
//      = T(n/4) + c1 lgn + c2 (lgn - 1)
       // = ...
       // = T(1) + c [lgn + (lgn-1) + (lgn-2) + ... + 1]
       // = O(lgn*lgn)   
       // 
var countNodes = function(root) {
    
    if(!root) return 0;
    var left = root,right = root,height = 0;
    while(right){
    	left = left.left;
    	right = right.right;
    	height++;
    }
    if(!left) return Math.pow(2,height)-1;

    return 1+ countNodes(root.left) + countNodes(root.right);
};