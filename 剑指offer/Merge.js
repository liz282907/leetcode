/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
    var dummy = new ListNode(-1),
        result = dummy;
    dummy.next = null;       //注意当p1,p2都为null的时候，dummy.next要设置为null
    while (pHead1 && pHead2) {
        if (pHead1.val < pHead2.val) {
            result.next = pHead1;
            pHead1 = pHead1.next;
        } else {
            result.next = pHead2;
            pHead2 = pHead2.next;
        }
        result = result.next;
    }
    if (pHead1) result.next = pHead1;
    if (pHead2) result.next = pHead2;
    return dummy.next;

    function ListNode(x) {
        this.val = x;
        this.next = null;
    }
}

module.exports = {
    Merge: Merge
};
