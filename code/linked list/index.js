/**
tricks: 设一个dummy作为fake node。
    var head = new ListNode(-1),
        prev = head;
    对prev进行操作。最后return head.next
    （操作是prev.next = blahblah）
    while(l1||l2    或者l1 && l2) prev.next = fn(l1,l2)。这样就可以直接从头开始遍历l1,l2
    了。
 如果是two pointer的话，可以考虑lDummy,rDummy，设置两个


 链表onePass的思路，可以考虑先后pointer,（比如倒数第N个节点，就让一个节点cur从head先走N步（包括head），然后继续走，另一个节点同时从dummy触发，当
 cur走到尾部（非null）时，另一个节点所处的位置就是倒数第N个位置的前一个节点，下面就可以进行后续的增删操作了）

 */
