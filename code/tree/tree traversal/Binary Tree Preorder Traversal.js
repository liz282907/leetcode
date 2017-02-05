/*
144. Binary Tree Preorder Traversal   QuestionEditorial Solution  My Submissions
Total Accepted: 149570
Total Submissions: 352661
Difficulty: Medium
Contributors: Admin
Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].

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
 思路主要就是递归或者循环，终止条件都是root是否为空。递归不用说，要不然会无限递归下去，因此在一开始就要设置终止条件。
 */
 /*思路一：递归*/
var preorderTraversal = function(root) {

    var result = [];

    (function traversal(root){
        if(!root) return;      //return result也可以
        result.push(root.val);
        traversal(root.left);
        traversal(root.right);
    })(root);

    return result;
};

 /*思路2： 循环,需要注意的是，每次push进stack的是root,从它pop来得到右节点*/
 var preorderTraversal = function(root) {

    var result = [],stack = [];

    while(root || stack.length >0){               //! attention1: 需要加栈非空的条件，对应于attention2处
                                                //场景为：当遍历后发现是最左边叶子节点且此时root = root.right，也为空的时候，如果不加statck非空就会终止，加了的话，标志该叶节点已经结束，需要pop stack得到它的父节点及右节点。返回到上一层
        while(root){

            result.push(root.val);
            stack.push(root);          //目的是为了pop后得到右节点
            root = root.left;
        }
        if(stack.length){                  //右节点      attention2
            root = stack.pop();
            root = root.right;
        }
    }

    return result;
};
