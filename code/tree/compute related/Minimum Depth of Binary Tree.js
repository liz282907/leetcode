/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 /**

 其实有一个通用的解法= =，就是遇到叶子节点就把它的level放进数组，这样的话，minLevel，maxLevel都可以知道咩呵呵，四不四很机智。
 递归解法,一遇到叶子节点就return 它的level,但是这样不太好，因为退出循环不好整个退出。会依然计算
其他的叶子节点，因此需要维护一个全局最小level来跳过循环。
注意点：
1，因为js值是非引用传递的，因此，要改变minlevel的值，只能通过闭包的内部改外部，而不能像之前那样
function getLevel(node,level,minlevel)传进去，这样not work
2，进入递归的之前，要判断，因为可能没有左子树或者右子树*/

var minDepth = function(root) {

    if(!root) return 0;
    var level = 1;
    var minLevel = Number.POSITIVE_INFINITY;
    getLevel(root,level);
    return minLevel;

    function getLevel(node,level){
        if( isLeaf(node) && level<minLevel){
            minLevel = level;
            return;
        }
        if(isLeaf(node)) return;
        if(node.left) getLevel(node.left,level+1,minLevel);    //attention！
        if(node.right) getLevel(node.right,level+1,minLevel);
    }
    function isLeaf(node){
        return node && !node.left && !node.right;
    }

};

/**
clean code 版本: 类似于maxDepth的递归解法，做了改进，使得空子树不影响高度的计算。
*/
var minDepth = function(root) {

    //因为要避免这种情况，root有左子无右子，那么计算的话min(left,right)会计算为0，是不符合本意的。因此
    //需要在min之前判断，如果该节点为空，但是有兄弟节点，那么就得给它置infinity，使之不影响计算。
    return getMinDepth(root,false);
    function getMinDepth(node,hasSibling){
        if(!node) return hasSibling? Number.POSITIVE_INFINITY: 0;
        return 1+ Math.min(getMinDepth(node.left, node.right),getMinDepth(node.right,node.left));
    }
};




/**非递归解法，层次遍历
注意点： nextLevel不要忘了置空。
*/
var minDepth = function(root) {

    if(!root) return 0;
    var curLevel = [root];
    var nextLevel = [];
    var level = 1;

    while(curLevel.length){
        var node = curLevel.shift();
        if(isLeaf(node)) return level;

        if(node.left) nextLevel.push(node.left);
        if(node.right) nextLevel.push(node.right);

        if(curLevel.length<=0) {
            level += 1;
            curLevel = nextLevel;
            nextLevel = [];             //一定不要忘了置空= =！
        }
    }
    function isLeaf(node){
        return node && !node.left && !node.right;
    }
};