/**
Given a binary tree

    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Note:

You may only use constant extra space.
You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
For example,
Given the following perfect binary tree,
         1
       /  \
      2    3
     / \  / \
    4  5  6  7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL



 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 思路：
 楼主本来想用层次遍历的方法，但是好像需要n个space,不满足题目中要求的常数空间。
 自然也不能用循环，因为需要stack。
 所以换一种思路，找出里面的规律：
 如果一个子节点是根节点的左子树，那么它的next就是该根节点的右子树，譬如上面例子中的4，它的
next就是2的右子树5。
如果一个子节点是根节点的右子树，那么它的next就是该根节点next节点的左子树。譬如上面的5，它
的next就是2的next（也就是3）的左子树。
 */
var connect = function(root) {

    connectTree(null,root);

    function connectTree(parentNode,node){
        if(!node) return;
        if(!parentNode) node.next = null;
        else{
            //是左子树
            if(parentNode.left===node) node.next = parentNode.right;
            //作为右子树
            else if(parentNode.right===node){
                //parent是否为本层最后一个
                if(parentNode.next)
                    node.next = parentNode.next.left;
                else
                    node.next = null;
            }

        }


        connectTree(node,node.left);
        connectTree(node,node.right);

    }
};

//方法二，不像上面的考虑parent和当前，而是考虑node和sibling.更为简洁一点。
var connect = function(root) {

    connectTree(root,null);

    function connectTree(node,sibling){
        if(!node) return;

        node.next = sibling;
        connectTree(node.left,node.right);
        if(sibling)
            connectTree(node.right,sibling.left);
        else
            connectTree(node.right,null);

    }
};