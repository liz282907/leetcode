/**
 * Given a list, rotate the list to the right by k places, where k is non-negative.

For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.

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
 * @param {number} k
 * @return {ListNode}
 * 注意点： 
 * test case: 
 * 		[],0 ，[],1
 * 	思路： 楼主最开始的想法是跟 remove nth node from left一样，找到倒数第k个节点的前一个，然后断开，对于k大于list长度的，直接返回head...
 * 	但是run了以后测试不对，想了下，貌似理解错题意了...:( 貌似要形成环以后再跑， k%=len
 */
var rotateRight = function(head, k) {


    var dummy = new ListNode(-1);
    dummy.next = head;

    var len = 0,
        cur = dummy,
        count = 0;
    while (cur.next) {
        cur = cur.next;
        len++;
    }
    cur.next = head;
    k = len-k%len;
    while (k--) cur = cur.next;   //k--不能忘

    head = cur.next;
    cur.next = null;

    return head;

};
