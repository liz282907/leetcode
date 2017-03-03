/**
 * Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}.

1,2,3   1,3,2

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
 * @return {void} Do not return anything, modify head in-place instead.
 * 思路是： 1，2，| 3，4 分成两半（fast,slow指针）left,right
 * 对right reverse一下， 变成
 *         1，2
 *         4，3
 *    然后设一个dummy, 依次在left,right间跳着指向 dummy.next = left,dummy.next = right这样
 *    1，4，2，3串起来
 * 
 */
var reorderList = function(head) {
    if(!head) return;
    //find middle
    var fast = head, slow = head;
    while(fast && fast.next){
    	fast = fast.next.next;
    	slow = slow.next
    }
    var right = slow.next,left = head;
    slow.next = null;
    var reversedRight = reverse(right);

    var result = new ListNode(-1);
    
    while(left || reversedRight){
        if(left){
    		result.next = left;
    		left = left.next;
    		result = result.next;
    	}
    	if(reversedRight){
    		result.next =  reversedRight;
    		reversedRight = reversedRight.next;
    		result = result.next;
    	}
    }
    //reverse right
    function reverse(node){
        if(!node) return null;
    	var prev = null,cur = node;
    	while(cur && cur.next){
    		var next = cur.next;
    		cur.next = prev;
    		prev = cur;
    		cur = next;
    	}
    	cur.next = prev;
    	return cur;
    }

};