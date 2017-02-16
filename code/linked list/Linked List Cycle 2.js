/**
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

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
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 *
 *  设起点到相遇点的距离为 s, 环周长为l, 则
 *  s+nl = 2s  => s = nl.
 *  而s = x + a(a为环入口到相遇点距离)
 *  即 x+a = nl = (n-1)l + L-x         (L为链表长度)
 *  则 x = (n-1)l+L-x-a     L-x-a即为环中剩余的位置，
 *  因此，让一个慢节点从起始位置开始出发，另一个节点从相遇位置继续出发，再次相遇处即为环入口位置。
 *  
 *  还有一个变种题目是计算环长度，让快节点在相遇位置不动，慢节点继续走，计算到再次相遇时经过了多少个节点。即为环的长度
 *
 * 
 */
var detectCycle = function(head) {
    
    var fast = head,slow = head;
    while(fast && fast.next){
    	fast = fast.next.next;
    	slow = slow.next;
    	if(fast===slow) break;
    }
    if(!fast || !fast.next) return null;
    fast = head;
    while(fast!==slow && fast && slow){
    	fast = fast.next;
    	slow = slow.next;
    }
    return fast;

};