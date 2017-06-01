/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (!l1 && !l2) return null;
    var dummy = new ListNode(-1),
        carry = 0,
        head = dummy;

    while (l1 || l2) {
        var sum = carry,
            curVal = 0;
        if (l1) {
        	sum += l1.val;
        	l1 = l1.next;
        }
        if (l2) {
        	sum += l2.val;
        	l2 = l2.next;
        }
        curVal = sum % 10;
       	carry = Math.floor(sum / 10);
        head.next = new ListNode(curVal);
        head = head.next;
    }
    while(carry){
    	head.next = head.next = new ListNode(carry%10);
    	carry = Math.floor(carry/10);
    }
    return dummy.next;

};
