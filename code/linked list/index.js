/**
tricks: 设一个dummy作为fake node。
    var head = new ListNode(-1),
        prev = head;
    对prev进行操作。最后return head.next
    （操作是prev.next = blahblah）
    while(l1||l2    或者l1 && l2) prev.next = fn(l1,l2)。这样就可以直接从头开始遍历l1,l2
    了。

 */
