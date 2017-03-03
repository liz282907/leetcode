/**
 * Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
You should return [1, 3, 4].

Credits:
Special thanks to @amrsaqr for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

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
 * @return {number[]}
 * 很简单的题目，层次遍历即可
 */
var rightSideView = function(root) {
	if(!root) return [];

    var result = [],curLevel = [root],nextLevel = [];

    while(curLevel.length){
    	var cur = curLevel.shift();
    	if(cur.left) nextLevel.push(cur.left);
    	if(cur.right) nextLevel.push(cur.right);
    	if(curLevel.length===0) {
    		result.push(cur.val);
    		curLevel = [].concat(nextLevel);
    		nextLevel = [];         //别忘了清空= =
    	}

    }
    return result;





};