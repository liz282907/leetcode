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
 */
var deleteDuplicates = function(head) {
	//空或者只有一个元素，防止.next没有，会有undefined问题
	if(!head || !head.next)
		return head;

    var cur = head,next = head.next;

    while(next){
    	if(next.val!==cur.val){
    		cur.next = next;
    		cur = next;
    	}
    	next = next.next;
    }
    cur.next = next;//把链表的最后置空（防止全是重复的，那么head其实没有改变）
    return head;

    // var cur = head;
    // while(cur && cur.next){

    // }

};