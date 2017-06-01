/**
 * 输入两个链表，找出它们的第一个公共结点。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
    注意，判断条件得放在while的表达式中。不能这么写
 * while(true){
 * 		if(..)
 *
 * 		if(prev1===prev2) break;
 * }
 * 这样会错遇过这种情况，就是第一个数就是公共节点，那么就会跳过。
}*/

function FindFirstCommonNode(pHead1, pHead2)
{
    if(!pHead1 || !pHead2) return null;

	var prev1 = pHead1,prev2 = pHead2;
    while(prev1 !== prev2){
    	if(!prev1) prev1 = pHead2;
    	else prev1 = prev1.next;
    	if(!prev2) prev2 = pHead1;
    	else prev2 = prev2.next;
    }
    return prev1;
}