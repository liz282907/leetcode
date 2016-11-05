/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
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
 * @return {number[][]}
 偷了一个懒,放进数组的时候直接unshift进result数组，而不是之前的push.捂脸
 */
var levelOrderBottom = function(root) {
    if(!root) return [];
    var result = [],curLevel = [],nextLevel = [],temp = [];

    curLevel.push(root);

    while(curLevel.length){
        var cur = curLevel.shift();
        temp.push(cur.val);
        if(cur.left)  nextLevel.push(cur.left);
        if(cur.right) nextLevel.push(cur.right);
        if(curLevel.length<=0) {
            curLevel = nextLevel;
            nextLevel = [];
            if(temp.length) result.unshift([].concat(temp));//注意判断数组为空应该用length,其次push的时候别忘了js引用push.
            temp = [];
        }
    }

    return result;
};