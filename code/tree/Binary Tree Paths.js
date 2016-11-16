/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

  var result = [];
  getPaths(root,[]);
  return result;
  function getPaths(node,curPath){

    if(!node) return;

    curPath.push(node.val);
    if(!node.left && !node.right){
      result.push( curPath.join("->"));
      return;
    }

    getPaths(node.left,[].concat(curPath));
    getPaths(node.right,[].concat(curPath));

  }

};

var binaryTreePaths = function(root) {

  var result = [];

  getPaths(root,'');
  return result;
  function getPaths(node,curPath){

    if(!node) return '';

    curPath += '->'+ node.val;
    if(!node.left && !node.right){

      result.push( curPath.slice(2));
      return;
    }

    getPaths(node.left,curPath);
    getPaths(node.right,curPath);

  }

};