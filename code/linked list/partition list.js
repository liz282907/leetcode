/**
 * Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5.

Subscribe to see which companies asked this question.

Show Tags

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
 * @param {number} x
 * @return {ListNode}
 * 思路，设置两个dummy，lDummy,作为小于target的链表的头结点的前一个节点，rDummy是>=target的那条。
 * 然后遍历整个链表，分别连接。注意最后的尾部，rCur.next = null
 */
var partition = function(head, x) {
    
    var lDummy = new ListNode(-1),
    	rDummy = new ListNode(-1),
    	lCur = lDummy,
    	rCur = rDummy;
    var cur = head;

    while(cur){
    	if(cur.val<x) {
    		lCur.next = cur;
    		lCur = cur;
    	}else{
    		rCur.next = cur;
    		rCur = cur;
    	}
    	cur = cur.next;
    }
    lCur.next = rDummy.next;
    rCur.next = null;
    return lDummy.next;

};