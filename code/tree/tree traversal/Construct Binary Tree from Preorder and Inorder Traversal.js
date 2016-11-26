/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    var result = buildTreeFunc(preorder,inorder);
    console.log("temp",result);
    return result;


    function buildTreeFunc(preorder,inorder){

      if(preorder.length<=0||inorder.length<=0) return null;

      var node = new TreeNode(preorder.shift());

      var leftCount = inorder.indexOf(node.val);
      var rightCount = inorder.length-leftCount-1;

      node.left = buildTree(preorder.slice(0,leftCount),inorder.slice(0,leftCount));
      node.right = buildTree(preorder.slice(-1*rightCount,rightCount),inorder.slice(-rightCount,rightCount));

      return node;
    }
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}