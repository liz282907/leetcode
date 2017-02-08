/**
 * Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.

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
 * @param {number} n
 * @return {ListNode}
 * 思路： 设置两个指针prev,cur cur先走n步，然后一起走，当cur到达尾部的时候，prev指向的就是倒数第n个的前一个位置，那么删除prev.next即可
 */
var removeNthFromEnd = function(head, n) {
    var count = 1;
    var dummy = new ListNode(-1),cur = head,prev = dummy;
    dummy.next = head;

    while(count!==n){
    	cur = cur.next;
    	count++;
    }
    while(cur.next){
    	cur = cur.next;
    	prev = prev.next;
    }
    prev.next = prev.next.next;
    return dummy.next;
};