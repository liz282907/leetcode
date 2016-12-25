/**
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

Subscribe to see which companies asked this question
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
    var carry = 0, dummy = new ListNode(-1),
        prev = dummy;

    while(l1|| l2){               // 保证最长遍历list
        var left = l1 ? l1.val :0;
        var right = l2 ? l2.val :0;
        var sum = left + right + carry;
        carry = parseInt(sum / 10);

        // 前面需要有两个条件。防止此时l1位空，那么l1.next 会访问next of null
        l1 = l1 && l1.next? l1.next: null;
        l2 = l2 && l2.next? l2.next: null;
        prev.next = new ListNode(sum%10);
        prev = prev.next;
    }
    if(carry) {
        prev.next = new ListNode(carry);
    }

    return dummy.next;
};

