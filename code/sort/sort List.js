/**
 * Sort a linked list in O(n log n) time using constant space complexity.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * related problem: merge two sorted lists
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {

    if(!head || !head.next) return head;
    //找到中间节点：
    var fast = head,slow = head;
    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    fast = slow;
    slow = slow.next;//l2的开始。注意顺序，一定要在action2执行之前做，否则会使得slow为undefined。
    fast.next = null;//action2: 断开成第一段l1

    var l1 = sortList(head);
    var l2 = sortList(slow);
    return mergeTwoLists(l1,l2);
};

var mergeTwoLists = function(l1, l2) {

    var head = new ListNode(-1),
        prev = head;
    while(l1 && l2){
        if(l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        }else{
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;           //2
    }
    prev.next = l1?l1:l2;
    return head.next;

};