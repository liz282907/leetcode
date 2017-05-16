/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function PrintFromTopToBottom(root)
{
    if(!root) return [];
    var result = [];
    var stack = [root];
    while(stack.length){
    	var cur = stack.shift();
    	result.push(cur.val);
    	if(cur.left) stack.push(cur.left);
    	if(cur.right) stack.push(cur.right);
    }
    return result;
}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};