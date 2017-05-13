/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
	if(k<=0 || !head) return null;
    var count = k,prev = head, result = head;
    while(count>1 && prev){
    	prev = prev.next;
    	count--;
    }
    if(!prev) return null;    //k>链表长度
    while(prev.next){
    	prev = prev.next;
    	result = result.next;
    }
    return result;

}
module.exports = {
    FindKthToTail : FindKthToTail
};