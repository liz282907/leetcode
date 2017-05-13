/**
 * 输入一个链表，反转链表后，输出链表的所有元素。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    if(!pHead) return pHead;
    var prev = null,cur = pHead;
    while(cur){
    	var next = cur.next;
    	cur.next = prev;
    	prev = cur;
    	cur = next;
    }
    return prev;
}
module.exports = {
    ReverseList : ReverseList
};