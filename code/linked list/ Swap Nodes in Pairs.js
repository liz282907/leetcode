/**
 * Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

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
 *  prev cur   1->2->3->4
 *  思路： prev cur nextPrev nextnext
 *
 * 	 	prev<-cur;
 * 	 	prev.next -> nextnext
 * 	 	prev = nextPrev;
 * 	 	cur = nextnext;
 * test case: [1,2]
 */
var swapPairs = function(head) {
	if(!head || !head.next) return head;       //attention!
    var prevDummy = new ListNode(-1),
    	dummy = new ListNode(-1);
    prevDummy.next = dummy;
    dummy.next = head;
    
    var prev = prevDummy,cur = dummy;
    while(cur && cur.next && cur.next.next){
    	var nextPrev = cur.next;
    	cur.next = prev;
    	prev.next = nextPrev.next;
    	prev = nextPrev;
    	cur = prev.next;
    	console.log(cur.val)
    }

    // prev cur | cur.next cur.next.next
    //如果cur.next存在，但cur.next.next不存在
    if(cur.next) prev.next = cur.next;   // prev cur | cur.next null
    else prev.next = null;     // prev cur | null
    
    cur.next = prev;    //     prev<- cur

    return prevDummy.next;
};