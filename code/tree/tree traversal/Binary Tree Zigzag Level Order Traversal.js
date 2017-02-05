/**
Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/

var zigzagLevelOrder = function(root) {
    if(!root) return [];
    var result = [],curLevel = [],nextLevel = [],temp = [];

    curLevel.push(root);

    while(curLevel.length){
        var cur = curLevel.shift();
        temp.push(cur.val);
        if(cur.left)  nextLevel.push(cur.left);
        if(cur.right) nextLevel.push(cur.right);
        if(curLevel.length<=0) {
            curLevel = nextLevel;
            nextLevel = [];
            if(temp.length) {
                if((result.length+1) % 2 ===0)            // 判断层数，如果是奇数层，则顺序，否则逆序
                  temp = temp.reverse();
                result.push([].concat(temp));
            }//注意判断数组为空应该用length,其次push的时候别忘了js引用push.
            temp = [];
        }
    }

    return result;
};
