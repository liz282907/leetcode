/**
 * Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

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
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 * 思路跟convert sorted array to binary search tree差不多，找到中点即可，这边可以用快慢指针。
 * 需要注意的是，因为要分成两个链表，因此要有一个prev指针为slow的前一个，当slow为中点时，要让prevSlow.next指向null,
 * 断开链表。
 * 时间复杂度O(nlgn)，因为T(n) = 2T(n/2) + n, 空间O(lgn)
 */
var sortedListToBST = function(head) {
    
    if(!head) return null;
    return listToBST(head);

    function listToBST(node){
        if(!node) return null;
        if(!node.next) return new TreeNode(node.val);     //一定要加这个判断，testcase 是[1],否则在2处，node,slow都会是node,会无限递归下去
    	
    	var slow ,fast,prevSlow = new ListNode(-1);
    	slow = fast = node;
    	prevSlow.next = node;
	    while(fast && fast.next){
	    	fast = fast.next.next;
	    	prevSlow = slow;         //attention！
	    	slow = slow.next;
	    }
	    var root = new TreeNode(slow.val);
	    prevSlow.next = null;
	    root.left = listToBST(node);    //2
	    root.right = listToBST(slow.next);
	    return root;
    }

};