/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
         1
       / \
      2   2
     / \ / \
    3  4 4  3
   /         \
  1           1
    1
   / \
  2   2
   \  /
   4 4
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

    if(!root) return true;
    return isSame(root.left,root.right); //别忘了return
    function isSame(left,right){
        if(!left && !right) return true;
        //因为都为空的情况排除了，只剩下至少有一个不为空的情况，又分左空，有空，都不空但是值不等的情况。简化写法
        if(!left || !right || left.val!==right.val) return false;

        return isSame(left.left,right.right) && isSame(left.right,right.left);
    }
};

//依然用层次遍历的方法
var isSymmetric = function(root) {

    if(!root) return true;
    var stack = [];
    stack.push(root.left,root.right);
    var left,right;
    while(stack.length){
        left = stack.shift();
        right = stack.shift();
        if(!left && !right ) continue;
        if(!left || !right || left.val!==right.val) return false;
        stack.push(left.left);
        stack.push(right.right);

        stack.push(left.right);
        stack.push(right.left);
    }
    return true;


};