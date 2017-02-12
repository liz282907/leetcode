/**
 * Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?

Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

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
 */
//循环方法
var reverseList = function(head) {
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
};

//递归方法
var reverseList = function(head) {

   return reverse(null,head);      //别忘了return = =

    function reverse(left,right){
    	if(!right) return left;

    	var next = right.next;
    	right.next = left;
    	return reverse(right,next);
    }
};




