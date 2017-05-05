/**
 * Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?

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
 * @return {boolean}
 * 思路： 链表分段以后（快慢指针），右边反转，然后一一比较，注意最后return的条件要考虑奇偶数链表，
 * 还有一种方法，不用快慢指针的话，就是对整个list进行reverse，然后比较。跟reverseString一样的思路。
 */

var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    
    var dummy = new ListNode(-1);
    	dummy.next = head;
    var fast = dummy,slow = dummy;
    while(fast && fast.next){
    	fast = fast.next.next;
    	slow = slow.next;
    }
    fast = slow.next;
    slow.next = null;
    slow = head;
    fast = reverseList(fast);
    while(fast && slow){
    	if(fast.val!==slow.val) return false;
    	fast = fast.next;
    	slow = slow.next;
    }
    return !slow || !slow.next
    function reverseList(head){
        var prev = null,cur = head;
       	while(cur){
       		var next = cur.next;
       		cur.next = prev;
       		if(!next) break;      //注意尾节点的话，不要再循环了，要不然找不到头结点。
       		else{
       		    prev = cur;
       		    cur = next;
       		}
       	}
       	return cur;
    }
};