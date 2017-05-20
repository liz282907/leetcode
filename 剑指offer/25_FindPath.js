/**
 * 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
	var result = [];
    find(root,expectNumber,0,[]);
    return result;
    function find(root,expectNumber,curSum,solution){
    	if(!root) return;
    	curSum += root.val;
    	solution.push(root.val);

    	if(isLeaf(root) && curSum===expectNumber){
    		result.push([].concat(solution));
    	}
    	if(isLeaf(root) && curSum!==expectNumber) return;
    	if(curSum>expectNumber) return;

    	
    	if(root.left) find(root.left,expectNumber,curSum,[].concat(solution)); //注意这边要concat，否则就是引用了，如果不想耗数组，也可以直接用字符串，逗号相连
    	if(root.right) find(root.right,expectNumber,curSum,[].concat(solution));
    }
    function isLeaf(root){
    	return root && !root.left && !root.right
    }
}
module.exports = {
    FindPath : FindPath
};