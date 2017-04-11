/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
Credits:
Special thanks to @stellari for adding this problem and creating all test cases.

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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 思路，维持两个指针，一个从A开始，一个从B开始，交错遍历，每次遍历时查看是否相同。因为前面的个数始终一样，都是
 * A独有的+B独有的节点数。想了一下好像改变了里面的结构..放弃..但是思想应该是对的，只要保证prevA,prevB走的路程相同即可。
 * 那么让prevA走完后去从B开始，prevB走完后从A开始，这样保证他们走的路程一样。
 * 
 * ps。感觉题目有丢丢像树的一题，最近公共祖先。当时的思路一种是求出两点所在的位置（层数），然后让底层的那个赶上去，直到他们层数相同，
 * 然后一起去找parent。
 * 那么这一题其实也可以这么想，各求出a,b的长度，然后让一个先走abs(alen-blen).然后一起走。
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA  || !headB) return null;
	var preA = headA,preB = headB;
	while(preA!==preB){
		if(!preA) preA = headB;
		else preA = preA.next;
		if(!preB) preB = headA;
		else preB = preB.next;
	}
	return preB;

};