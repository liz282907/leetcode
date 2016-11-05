/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 思路，把数值进行替换，用后面的node替换本node
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};