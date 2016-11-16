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

