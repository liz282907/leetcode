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
/*
层次遍历也是维护一个stack,然后先把root push进去。在循环while(stack.length)中先unshift,注意是unshift不是pop哟
*/

/*
注意点：
1，可以用叶子节点（if(!node && !node.left && !node.right) 去做终止条件，但这样的话，在最外层还要加一个！root的判断。
也可以直接用空节点做终止条件。

比如 sum root to Leaf nUMBERs中。一般建议的是
    if(!node) return 0;    //1，一定要加这个判断，要不然 sumNumbers里面就要加!root判断。

    //blah,blah
    if(!node.left && !node.right ) {
        return sum;
    }
1处可以用来限制 root为空的情况。具体是return 还是return 表达式，看具体情况。对于path sum来说，return 0可以限制到叶节点下面的节点，做终止条件。

2，还是老生常谈的问题，引用传值。
因为树的递归，相当于两次进去。最终还得返回到原来的状态。原来backtrack只有一个递归，而且需要返回到原来的状态以进行下一轮本级运算，所以需要pop。下次访问的还是原来的数组。但是
现在两个递归..

        sumPath(node.left,[].concat(curPath)); //一定要注意！不能直接传数组，会是引用。
        sumPath(node.right,[].concat(curPath));
那只能这样[].concat咯，那这个时候也不用pop了~
比如，见下面 path sum2 的部分

把结果数组传过去的时候一定要另开一个。要不然会在原来的基础上进行变动，会相互影响。
具体可以看 sum root to leaf numbers的几种解法。能传值就传值，比如第三种递归就不错。必须传引用的时候注意深复制。

3, 有时候递归返回值会更加方便一点，见 path sum
*/