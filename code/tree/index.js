/**
 思路主要就是递归或者循环，终止条件都是root是否为空。递归不用说，要不然会无限递归下去，因此在一开始就要设置终止条件。
具体来说，循环的话：需要注意的是，
1，每次push进stack的是root,之所以要push是因为它是一个纽带，需要从它pop来得到右节点。
2，preorder inorder 都是得先while(root)到最左边的节点。唯一不同的就是，preorder此时除了要push stack,root=root.left
还需要先进行其他操作，比如把数据存进结果数组，或者输出啥的。而inorder是在pop的时候进行这些操作。
3，最外层while循环的条件是 root || stack.length，前者是防止一开始树就为空以及叶子节点的子元素，直接跳过。后者是防止，当本节点及它的左右节点都遍历完以后
 */
 /*思路一：递归*/
var preorderTraversal = function(root) {

    var result = [];

    (function traversal(root){
        if(!root) return;      //return result也可以
        result.push(root.val);
        traversal(root.left);
        traversal(root.right);
    })(root);

    return result;
};

 /*思路2： 循环,需要注意的是，每次push进stack的是root,从它pop来得到右节点*/
 var preorderTraversal = function(root) {

    var result = [],stack = [];

    while(root || stack.length >0){               //! attention1: 需要加栈非空的条件，对应于attention2处
                                                //场景为：当遍历后发现是最左边叶子节点且此时root = root.right，也为空的时候，如果不加statck非空就会终止，加了的话，标志该叶节点已经结束，需要pop stack得到它的父节点及右节点。返回到上一层
        while(root){

            result.push(root.val);
            stack.push(root);          //目的是为了pop后得到右节点
            root = root.left;
        }
        if(stack.length){                  //右节点      attention2
            root = stack.pop();
            root = root.right;
        }
    }

    return result;
};
