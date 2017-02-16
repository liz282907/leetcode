/**
 * Reverse a linked list from position m to n. Do it in-place and in one-pass.

For example:
Given 1->2->3->4->5->NULL, m = 2 and n = 4,

return 1->4->3->2->5->NULL.

Note:
Given m, n satisfy the following condition:
1 ≤ m ≤ n ≤ length of list.

Subscribe to see which companies asked this question.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 *  corner case : m===n===1
 */
var reverseBetween = function(head, m, n) {
    
    var dummy = new ListNode(-1);
    dummy.next = head;

    var prev = dummy,cur = head,count = 1;

    while(cur && count!==m){
    	prev = cur;
    	cur = cur.next;
    	count++;
    }
    var prevN = prev;
    if(cur){
    	prev = cur;
    	cur = cur.next;
    	prev.next = null;
    	count++;
    }
    while(count!==(n+1) && cur ){
    	var next = cur.next;
    	cur.next = prev;
    	prev = cur;
    	cur = next;
    	count++;
    }
    prevN.next.next = cur;
    prevN.next = prev;

    return dummy.next;







};