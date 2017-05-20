/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
 */

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree) {
    var tail = null;
    tail = traversal(pRootOfTree,tail);
    while(tail && tail.left){
		tail = tail.left;
    }
    return tail;
}


function traversal(root,lastNodeInList) {
    if (!root) return null;
    if(root.left) lastNodeInList = traversal(root.left,lastNodeInList);
    root.left = lastNodeInList;
    if(lastNodeInList) lastNodeInList.right = root;

    lastNodeInList = root;
    if(root.right) lastNodeInList = traversal(root.right,lastNodeInList); //注意更新这边的tail
    return lastNodeInList;
}

module.exports = {
    Convert: Convert
};