/*
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].

Note: Recursive solution is trivial, could you do it iteratively?

Subscribe to see which companies asked this question

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    var result = [];
    (function traversal(root){
        if(!root) return;
        traversal(root.left);
        result.push(root.val);
        traversal(root.right);
    })(root);
    return result;
};


var inorderTraversal = function(root) {

    var result = [],stack = [];

    while(root || stack.length>0){

        while(root){
            stack.push(root);
            root = root.left;
        }

        if(stack.length){
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }

    }


    return result;
};