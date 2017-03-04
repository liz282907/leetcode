/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 3,5,1,6,2,0,8,7,4
 * 1 2 3 4 5 6 7 8 9
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 思路： 有点占空间，给每个节点加两个字段，一个是parent，一个是level,level的用途是记录每个节点的层数，
 * 应该让在下面的高层的先赶上来，然后他们一起cur = cur.parent,这样才好控制parent的查找。
 */
var lowestCommonAncestor = function(root, p, q) {
	if(!root) return null;
    
    traverse(root,null,1);
    var low = p.level>q.level?p:q,
    	high = low===p?q:p;
    while(low.level>high.level) low = low.parent;
    if(low===high) return low;

    while(low && high && low!==high){
    	low = low.parent;
    	high = high.parent;
    }
    return low;

    
	function traverse(root,parent,level){
		if(!root) return;
		root.parent = parent;
		root.level = level;
		traverse(root.left,root,level+1);
		traverse(root.right,root,level+1);
	}
};
/**
 * 楼主后来看了下解题报告，还有一种不需要额外分配空间的方法，思路主要是，同时从左右两颗树递归下去找，直到首先找到p或者q,
 * 如果只在其中一棵树中找到，那说明这两个节点是在同一颗🌲中，先找到的即为parent，（一找到就return）如果两棵树都找到了，说明分散在两棵树中，
 * parent就是他们的共同节点。
 */
var lowestCommonAncestor = function(root, p, q) {
	if(root===p || root===q || !root) return root;
	var leftFound = lowestCommonAncestor(root.left,p,q),
		rightFound = lowestCommonAncestor(root.right,p,q);
	//右子树上
	if(!leftFound) return rightFound;
	if(!rightFound) return leftFound;
	return root;
};
