/**
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
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
注意点： 1和2处 需要注意，特别是1处要直接break出来
 */
var mergeTwoLists = function(l1, l2) {

    var head = new ListNode(-1),
        prev = head;
    while(l1 || l2){
       if(l1&&l2){     //要判断，否则可能报错：val访问的是undefined
            if(l1.val <= l2.val) {
                prev.next = l1;
                l1 = l1.next;
            }else{
                prev.next = l2;
                l2 = l2.next;
            }
            prev = prev.next;           //2
        }else{
            if(l1) prev.next = l1;
            else prev.next = l2;
            break;                     //1
        }
    }
    return head.next;

};

//更简化，其实这个跟add two numbers不太一样，那个最好是用l1 ||l2.这边最好用
// l1&&l2，然后p就直接next到剩余的那条list。
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