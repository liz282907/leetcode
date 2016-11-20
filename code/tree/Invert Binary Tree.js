/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 思路，递归交换两个树，用的是遍历的思路。
 */
var invertTree = function(root) {

  return swap(root);
  function swap(node){
    if(!node) return node;

    if(node.left) node.left = invertTree(node.left);
    if(node.right) node.right = invertTree(node.right);

    var temp = node.right;
    node.right = node.left;
    node.left = temp;
    return node;
  }
};

