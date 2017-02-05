/*
Given a binary tree, return the postorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [3,2,1].

Note: Recursive solution is trivial, could you do it iteratively?

Subscribe to see which companies asked this question

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
 * @return {number[]}
 第一种思路： 递归。
 第二种思路：对于任一结点P，将其入栈，然后沿其左子树一直往下搜索，直到搜索到没有左孩子的结点，
 此时该结点出现在栈顶，但是此时不能将其出栈并访问，因此其右孩子还为被访问。所以接下来按照相同的
 规则对其右子树进行相同的处理，当访问完其右孩子时，该结点又出现在栈顶，此时可以将其出栈并访问。
 这样就保证了正确的访问顺序。可以看出，在这个过程中，每个结点都两次出现在栈顶，只有在第二次出现
 在栈顶时，才能访问它。因此需要多设置一个变量标识该结点是否是第一次出现在栈顶。
 */
var postorderTraversal = function(root) {

    var result = [];

    (function traversal(root){
        if(!root) return;      //return result也可以
        traversal(root.left);
        traversal(root.right);
        result.push(root.val);
    })(root);

    return result;
};

var postorderTraversal = function(root) {

    var result = [],stack = [],p;

    while(root || stack.length >0){
        while(root){
            root.isFirst = true;
            stack.push(root);          //目的是为了pop后得到右节点
            root = root.left;
        }
        p = null;

        if(stack.length>0){
            root = stack.pop();
            if(root.isFirst) {             //第一次遍历到，此时只是为了得到右节点。因此还得放进栈。
                root.isFirst = false;       //再访问的话就是左右节点都访问过的情况了。
                stack.push(root);
                root = root.right;
            }
            else{
                result.push(root.val);
                root = null;
                //应该stack pop了。但是不同于上面root = root.right，下面的元素都是已经访问过了的，因此不需要再遍历赋值一遍。因此只需要pop即可。
                //那么就应该pass掉上面一个while(root)的循环，因此 root置空即可。

            }
        }
    }
    return result;
};

/**
* 第三种思路：这种方法有点类似于栈版的层次遍历。保证了顺序是左，右，父。如果cur是叶子节点。那么放到result里。如果不是，
但是刚刚已经访问过它的子了，说明本次访问是回退。那么也放进result。
如果上面都不是，说明是第一次访问到cur，那么就依次把左，右，自己push进去。这样就保证了后序遍历的次序。
以
    1
  2   3
为例。
注意点：
1，push进stack的时候，应该是反过来的，即1,3,2，这样pop的时候才能后续遍历
2. 可以用prev来标记cur是否是第一次访问还是回退回来。也可以在push子元素的时候将cur的子置空，这样再次返回的话，它就类似于叶子节点
就应该直接push进去了。很精妙的想法。
3，访问时应该先top(),而不是直接pop,因为子元素等会会压栈，但是自己实际上还不应该出栈。
4, prev记录的是last pop的元素。
5，之所以用栈，而不是队列（层次遍历用的是队列），是保证子元素永远最先访问。也符合后序遍历的目的。
**/
var postorderTraversal = function(root) {

    var result = [],stack = [],prev;

    if(!root) return result;         //不要忘了加
    stack.push(root);

    while(stack.length){
        var cur = stack.slice(-1)[0];  //类似于stack.top()
        //cur为叶节点 || 有子节点，但是子节点之前已经访问过了。
        //因为push的时候是按照先右后左放进去的。
        //因此如果prev是子元素的话，再访问到自己肯定是因为回退过来的，那么也应该放到结果数组里。
        if((!cur.left && !cur.right )|| (prev && prev===cur.left ||prev===cur.right)){
            stack.pop();
            result.push(cur.val);
            prev = cur;
        }else{
            if(cur.right) stack.push(cur.right);
            if(cur.left) stack.push(cur.left);
        }
    }

    return result;
};


var postorderTraversal = function(root) {

    var result = [],stack = [],prev;

    if(!root) return result;         //不要忘了加
    stack.push(root);

    while(stack.length){
        var cur = stack.slice(-1)[0];
        if(!cur.left && !cur.right ){
            stack.pop();
            result.push(cur.val);
            prev = cur;
        }else{
            if(cur.right) {
                stack.push(cur.right);
                cur.right = null;
            }
            if(cur.left) {
                stack.push(cur.left);
                cur.left = null;
            }
        }
    }

    return result;
};
