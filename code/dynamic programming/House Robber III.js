/**
 * The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.

Example 1:
     3
    / \
   2   3
    \   \ 
     3   1
Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:
     3
    / \
   4   5
  / \   \ 
 1   3   1
Maximum amount of money the thief can rob = 4 + 5 = 9.
Credits:
Special thanks to @dietpepsi for adding this problem and creating all test cases.

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
 * rob 返回的结果是【a,b】a为root被选中,root.left和root.right均不被选中的结果，b为root不被选中，，root.left跟root.right可能被选中的结果
 * 因此，最后只要比较 选中root还是不选中root两个哪个结果更大即好。
 */
var rob = function(root) {
    return Math.max.apply(null,robRoot(root))
    function robRoot(root){
        if(!root) return [0,0];

        var result = [],leftResult = robRoot(root.left),rightResult = robRoot(root.right);
        result[0] = leftResult[1] + rightResult[1] + root.val //root is chosen,那么left就应该不被选中，right也是，left求得的是
        result[1] = Math.max.apply(null,leftResult) + Math.max.apply(null,rightResult);
        return result;
    }
};