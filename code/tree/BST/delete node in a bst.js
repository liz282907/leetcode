/**
 * Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Note: Time complexity should be O(height of tree).

Example:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7
Subscribe to see which companies asked this question.

Show Tags
Have you met this question in a real interview? Yes  
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
 * @param {number} key
 * @return {TreeNode}
 * 思路：先看节点大小，如果root.val>key,那么必在左子树，继续递归（root.left=删除后的），如果root.val<key，则在右子树
 * 如果刚好相等，说明要开始处理了，要删除该节点了。
 * 1，如果要删除的root节点没有左子树，则把右子树提上来即可，root = root.right
 * 2. 如果要删除的root节点没有右子树，同上，root = root.left
 * 3. 左右子树都有，那么选择把右子树的最小节点findMin提上来，root.right = 删除了最小节点的右子树
 *
 * 最终返回root. 很经典的题目
 */
var deleteNode = function(root, key) {
    
    iif(!root) return null;
    if(root.val>key) root.left = deleteNode(root.left, key)
    else if(root.val<key) root.right = deleteNode(root.right,key)
    else{
    	if(!root.left) root = root.right;
    	else if(!root.right) root = root.left;
    	else{
    		//左右子树都存在，查找右子树的最小
    		var min = findMin(root.right);
    		root.val = min;
    		root.right = deleteNode(root.right,min);
    	}
    }
    return root;
};

function findMin(root){
	if(!root) return null;

	while(root.left){
		root = root.left;
	}
	return root.val;
}









