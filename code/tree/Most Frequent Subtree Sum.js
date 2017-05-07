/**
 * Given the root of a tree, you are asked to find the most frequent subtree sum. 
 * The subtree sum of a node is defined as the sum of all the node values formed by the subtree 
 * rooted at that node (including the node itself). So what is the most frequent subtree sum value? 
 * If there is a tie, return all the values with the highest frequency in any order.

Examples 1
Input:

  5
 /  \
2   -3
return [2, -3, 4], since all the values happen only once, return all of them in any order.
Examples 2
Input:

  5
 /  \
2   -5
return [2], since 2 happens twice, however -5 only occur once.
Note: You may assume the sum of values in any subtree is in the range of 32-bit signed integer.

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
 * @return {number[]}
 * 思路： 对每一颗子节点为root的树，记录它的sum,  然后每个节点的sum就是子节点的sum之和。然后放到dict里面去。
 */
var findFrequentTreeSum = function(root) {
    var dict = {},maxCount = 0;
    calSum(root);

    var sumDict= Object.keys(dict).reduce(function(prev,sum){
    	var count = dict[sum];
    	if(!prev[dict[sum]]) prev[dict[sum]] = [];
    	prev[dict[sum]].push(+sum);
    	maxCount = Math.max(maxCount,count);
    	return prev;
    },{}); 
    return sumDict[maxCount] ||[];       //注意，有可能sumDict里面是空的，也就是root本身就是空，那么maxCount为0，找不到

    function calSum(root){
    	if(!root) return 0;
    	var result = calSum(root.left) + calSum(root.right) + root.val;
    	if(!dict[result]) dict[result] = 0;     //注意这边判断，dict中可能没有result
    	dict[result]++;
    	return result;
    }
};