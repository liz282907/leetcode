/**
 * You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    
	if(!root) return 0;
	var result = 0;
	var count = [];
	traverseEveryNode(root,sum,count);
	for(var i=0;i<count.length;i++)
		result+= count[i];
    return result;
};

function traverseEveryNode(root,sum,count){
	if(!root) return;

	var cur = traverse(root,sum,0,0);
	count.push(cur);
	traverseEveryNode(root.left,sum,count);
	traverseEveryNode(root.right,sum,count);
}

function traverse(root,sum,curSum,result){
	if(!root) return 0;

	curSum += root.val;
	if(curSum===sum) {
		result++;
		return result;
	}
	result = traverse(root.left,sum,curSum,result)+traverse(root.left,sum,curSum,result);
	
	return result;
}



/**
 * 递归版本，但是不清楚为什么答案不对...实际画的时候觉得没错啊
 * @param  {[type]} root [description]
 * @param  {[type]} sum  [description]
 * @return {[type]}      [description]
 */
var pathSum = function(root, sum) {
   	if(!root) return 0;
	return traverse(root,sum,0,0) + pathSum(root.left,sum) + pathSum(root.right,sum);
};


function traverse(root,sum,curSum,result){
	if(!root) return 0;

	curSum += root.val;
	if(curSum===sum) {
		result++;
		return result;
	}
	result = traverse(root.left,sum,curSum,result)+traverse(root.right,sum,curSum,result);
	
	return result;
}

