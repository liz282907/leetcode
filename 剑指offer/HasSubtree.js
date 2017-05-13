/**
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
    这一题跟leetcode那个subtree（Subtree of Another Tree）还不太一样，那边是严格相等，即

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
 但这边的测试用例是true,即只要有一部分相等就可以。因此我们其实可以稍微改变一下isSame的判断条件。
 即只要root2为空，就true(root2空，root1非空，那么就是root1比root2还有多余的部分，root1,2都空自然same)
 就是1，2处的判断
} */
function HasSubtree(pRoot1, pRoot2)
{
	if(!pRoot2) return false;
	if(!pRoot1 && pRoot2) return false;
	var left = isSame(pRoot1.left,pRoot2);
	var right = isSame(pRoot1.right,pRoot2);

	return HasSubtree(pRoot1.left,pRoot2) || HasSubtree(pRoot1.right,pRoot2) || (left || right || isSame(pRoot1,pRoot2))
    

    function isSame(root1,root2){
    	if(!root2) return true;            //1
    	if(!root1 && root2) return false;   //2
    	
    	if(root1.val !== root2.val) return false;
    	return isSame(root1.left,root2.left) && isSame(root1.right,root2.right)
    }
}
module.exports = {
    HasSubtree : HasSubtree
};