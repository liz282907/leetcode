/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;

输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
} */
function reConstructBinaryTree(pre, vin)
{
    if(pre.length!==vin.length || !pre || pre.length===0) return null;
    var val = pre.shift();
    for(var i=0;i<vin.length;i++){
    	if(vin[i]===val) break;
    }
    var node = new TreeNode(val);
    node.left = reConstructBinaryTree(pre.slice(0,i),vin.slice(0,i))
    node.right = reConstructBinaryTree(pre.slice(i),vin.slice(i+1))
    return node;
}
module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};