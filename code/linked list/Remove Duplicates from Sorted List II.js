/**
 * Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

For example,
Given 1->2->3->3->4->4->5, return 1->2->5.
Given 1->1->1->2->3, return 2->3.

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
 * related problem: remove duplicateds from sorted list,那一题是删除多余的重复元素，（保留第一个）是从head.next开始遍历， while(next)
 * 是后与前比较。
 * 而本题是删除所有的重复元素，因此，要从head开始遍历，是前与后进行比较。
 */
var deleteDuplicates = function(head) {
    
	var dummy = new ListNode(-1);
	dummy.next = head;
	var prev = dummy,cur = head;
	
	while(cur){
		if(cur.next && cur.val===cur.next.val){
			while(cur && cur.next && cur.val===cur.next.val) cur = cur.next;
			cur = cur.next;
			prev.next = cur;
		}else{
			prev = cur;
			cur = cur.next;
		}
	}
	return dummy.next;

};