/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    if(!p && !q ) return true;
    if((!p && q) || (p && !q) ||(p.val!==q.val)) return false;


    return  isSameTree(p.left,q.left) && isSameTree(p.right,q.right);

};

/**
循环方法，用的是层次遍历。注意shift,push顺序。每pop出一个，就判断它的节点非空与否和数据是否相等。
*/

var isSameTree = function(p, q) {

    var stack = [];
    stack.push(p);
    stack.push(q);

    while(stack.length){
        var p = stack.shift();
        var q = stack.shift();
        if(!p && !q) continue;           //一定要continue,而不是return,因为会遇到[1,null,3],[1,null,4]这种情况。即左子或者右子为空的情况。
        if((!p && q) || (p && !q) ||(p.val!==q.val)) return false;
        stack.push(p.left);
        stack.push(q.left);
        stack.push(p.right);
        stack.push(q.right);
    }
    return true;

};
