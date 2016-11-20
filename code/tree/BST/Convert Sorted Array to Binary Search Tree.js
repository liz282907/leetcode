/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 思路： BST的insert过程,BST的find过程其实跟二分查找很像，
 而insert跟find也差不多，只是find是返回node,而insert是进行树的挂接操作。
 这种方法可以建树，但是不能满足平衡二叉树的要求。因此应该考虑method2的思路。

 充分利用有序数组的条件。既然有序，那么二分出来最中间的那个就一定是每个子树的根，左边是左子树，右边是右子树。
 同时二分时要用math.floor。
 */

 //not working
var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;
    var root null;

    nums.forEach(function(num){
        root = insert(root,num);
    });
    return root;

    function insert(root,num){
        var cur = new TreeNode(num);
        if(!root) return cur;
        if(num<root.val) root.left = insert(root.left,num);
        else if(num>root.val) root.right = insert(root.right,num);

        return root;
    }

};




function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

//working
var sortedArrayToBST = function(nums) {
    if(!nums.length) return null;
    var root = null;

    return insert(nums,0,nums.length-1);

    function insert(nums,start,end){

        //需要进行递归判断，相当于二分法的终止条件。同时终止条件应该是start>end，
        //没有等于哟。
        if(start>end) return null;
        var mid = Math.floor((start+end)/2);
        var root = new TreeNode(nums[mid]);

        root.left = insert(nums,start,mid-1);
        root.right = insert(nums,mid+1,end);

        return root;
    }

};