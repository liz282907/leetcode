/**
 * 输入一棵二叉树，判断该二叉树是否是平衡二叉树
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
    需要注意的是，这边还要再分别考虑左右子树各自的情况。牛客上的测试用例不准确= =
} */

function IsBalanced_Solution(pRoot)
{
    if(!pRoot) return true;
    return Math.abs(height(pRoot.left)-height(pRoot.right))<=1 && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);

    function height(node){
        if(!node) return 0;
        if(!(node.left) && !(node.right)) return 1;

        return Math.max(height(node.left),height(node.right))+1;
    }
}

//如果想只遍历一次的话，只能给每个node增加一个属性值height，然后判断即可。
