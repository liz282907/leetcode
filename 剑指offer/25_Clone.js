/**
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），
 * 返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
    var dummy = new RandomListNode(-1),prev,newPrev,map = new Map();
    prev = pHead;
    newPrev = dummy;
    while(prev){
    	var node = new RandomListNode(prev.label);
    	node.next = null;
    	newPrev.next = node;
    	map.set(prev,node);
    	newPrev = node;
    	prev = prev.next;
    }
    prev = pHead;
    while(prev){
    	var mapPrev = map.get(prev); //对应的新链表上的节点
    	if(!prev.random) mapPrev.random = null;           //attention！
    	else mapPrev.random = map.get(prev.random);
    	prev = prev.next;
    }
    return dummy.next;
}
module.exports = {
    Clone : Clone
};