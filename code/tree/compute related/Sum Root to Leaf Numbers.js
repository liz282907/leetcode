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
var sumNumbers = function(root) {

    if(!root) return 0;
    var sum = 0;
    var curPath = [];


     (function sumPath(node){

        if(!node) return;
        //叶子节点
        if(!node.left && !node.right ){
            curPath.push(node.val);
            sum+= parseInt(curPath.join(""));
            return;
        }

        curPath.push(node.val);
        if(node.left) {
            sumPath(node.left);
            curPath.pop();

        }
        if(node.right) {
            sumPath(node.right);
            curPath.pop();

        }


    })(root);

    return sum;
};

//上面的改进方法

var sumNumbers = function(root) {

    var sum = 0;
    var curPath = [];


     (function sumPath(node,curPath){

        if(!node) return;

        curPath.push(node.val); //1

        //叶子节点
        if(!node.left && !node.right ){
            sum+= parseInt(curPath.join(""));
            return;
        }

        sumPath(node.left,[].concat(curPath)); //一定要注意！不能直接传数组，会是引用。
        sumPath(node.right,[].concat(curPath));

        // curPath.pop(); 无用，因为已经传新的内存数组过去了


    })(root,curPath);

    return sum;
};




//method2
var sumNumbers = function(root) {


    var sum = 0;
    return sumPath(root,0);


    function sumPath(node,sum){

        if(!node) return 0;    //一定要加这个判断，要不然 sumNumbers里面就要加!root判断。

        sum = sum*10 + node.val;
        if(!node.left && !node.right ) {
            return sum;
        }
        return sumPath(node.left,sum) + sumPath(node.right,sum);

    }

};