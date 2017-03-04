/**
 * Given a binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

For example:
Given the below binary tree,

       1
      / \
     2   3
Return 6.

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
 * 思路，跟maxSubArray一样，遍历每个节点，（后序遍历，类似于subarray中的动态规划，先计算前面的）
 * 如果left值>0,则加入，右>0，加入，因为对本节点有贡献，然后计算当前节点的值，每次计算完节点后，更新maximum即可。
 * 是不是思路跟maxSubArray一毛一样= =
 */
var maxPathSum = function(root) {
    var maximum = Number.NEGATIVE_INFINITY;  //不要笔误...居然之前NEGATIVE_POSITIVE都写粗来了=。=
    pathSum(root);
    return maximum;

    function pathSum(root){
    	if(!root) return 0;

    	var left = pathSum(root.left);
    	var right = pathSum(root.right);
    	var temp = root.val;
    	if(left>0) temp += left;
    	if(right>0) temp += right;
    	maximum = Math.max(maximum,temp);

    	var maxChild = Math.max(left,right);

    	return (maxChild>0? maxChild +root.val : root.val);  //注意返回的值 只可能是一个path上的，而不能是总的sum.
    }
};