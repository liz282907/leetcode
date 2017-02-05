/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 将lists看成一个队列，每次pop出两个，然后放到尾部，直到整个队列只有一个listnode为止，就是合并以后的。
 * 当然也可以类似于看到的结题报告中这么一个一个排序。
 * if (lists.length == 0) return null;
    var p = lists[0];
    for (int i = 1; i < lists.length; i++) {
        p = mergeTwoLists(p, lists[i]);
    }
    return p;
 */
var mergeKLists = function(lists) {
    //不要忘记边界条件
    if(!lists.length) return null;
    while(lists.length>1){
        var newList = mergeTwoLists(lists.shift(),lists.shift());
        lists.push(newList);
    }
    return lists[0];

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