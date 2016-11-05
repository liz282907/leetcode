/**
*Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
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
 思路，记录本层跟下一层。本层遍历的时候，对每个元素，push进它的子元素。当本层结束的时候，
 把本层的所有信息都push到result数组里。注意遍历本层时，是shift，而不是pop，是队列哟。
 当然啦，也可以跟其他解题报告一样用递归，递归函数里面存放一个当前层数。
 或者还有一种思路是，用递归求得树的高度a，那么result数组里面就有a项。同上面的递归一样。具体的可以看解题报告。
 */
var levelOrder = function(root) {
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
            if(temp.length) result.push([].concat(temp));//注意判断数组为空应该用length,其次push的时候别忘了js引用push.
            temp = [];
        }
    }

    return result;
};


/**
解题报告的递归方法
public class Solution {
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    traverse(root, 1, result);
    return result;
  }
void traverse(TreeNode root, int level,List<List<Integer>> result) {
    if (root == null) return;
    if (level > result.size())
      result.add(new ArrayList<>());
    result.get(level-1).add(root.val);
    traverse(root.left, level+1, result);
    traverse(root.right, level+1, result);
}
}
*/