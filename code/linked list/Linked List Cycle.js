/**
 * Given a linked list, determine if it has a cycle in it.

Follow up:
Can you solve it without using extra space?

Subscribe to see which companies asked this question.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 思路： 快慢指针，还有一种方法是：       用hash记录某个节点是否被访问过，如果访问过，则存在环，空间复杂度O（n）
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    var fast = head, slow = head;
    while(fast && fast.next ){
    	fast = fast.next.next;
    	slow = slow.next;
    	if(fast===slow) return true
    }
    return false
};