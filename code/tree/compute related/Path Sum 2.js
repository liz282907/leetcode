/**
Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

For example:
Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
return
[
   [5,4,11,2],
   [5,8,4,5]
]
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {

  var result = [];
  curSumPath(root,sum,0,[]);
  return result;
  function curSumPath(node,target,curSum,curPath){

    if(!node) return;

    curSum += node.val;
    curPath.push(node.val);

    if(!node.left && !node.right && curSum===target){
      result.push([].concat(curPath));
      return;
    }

    curSumPath(node.left,target,curSum,[].concat(curPath));
    curSumPath(node.right,target,curSum,[].concat(curPath));

  }

};