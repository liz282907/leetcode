/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 插入排序，对数组来讲，是要一个一个往后挪（前提是每次插入前都跟最后一个进行比较一次，如果大，则比较下一个
 *），否则从cur.prev一个一个挪到后面去，空出来的就是要插入的位置。对于链表来讲，只要从前往后查找插入位置即可。（当然还是要首先比较最后一个元素的。）
 *
 * 有很多细节要考虑：
 * （1）需要维持的变量：
 *         对于大循环来讲
 *             prev(start:head)。每次要插入的元素的前一级，之所以要prev，而不是cur，是因为
 *             每次把节点插入到前面的链表中时，还要多做一步处理，prev.next = cur.next。防止prev依然指着被插入的cur,形成环。
 *             而且当cur为最后一个元素的时候，让prev.next指向null，可以作为尾部结束。
 *             next: cur.next。用于插入节点后，更新下一轮要处理的元素。插入之前保留，插入后赋值.
 *        对于查找的循环来讲：
 *             insertPrev（start：dummy）。用于插入。从dummy开始，是防止要插入head
 *  （2）查找的限定条件：
 *       因为从dummy开始，即insertPrev.next 要非空，而且值小于target.val。
 */
var insertionSortList = function(head) {
    if(!head) return head;

    var dummy = new ListNode(-1),prev = head,cur = head.next;
    dummy.next = head;
    while(cur){
        //1
        if(cur.val>=prev.val) {
            prev = prev.next;
            cur = cur.next;
        }else{
            var insertPrev = findInsertPos(dummy,cur);//找到要插入的位置的prev节点
            prev.next = cur.next;//脱离原来，防止形成环

            cur.next = insertPrev.next;
            insertPrev.next = cur;

            cur = prev.next;        //新一轮赋值
        }
    }
    return dummy.next;
};


function findInsertPos(head,target){
    //head.next!==target是想限定在当前节点之前的查找范围，实际上也可以不加。这要看是否有
    //1处判断，没有1的话，会一直查找下去，可能到cur的右边。而先处理1会使得cur前面的元素必定有比cur大的，变相的也终结了
    while(head.next && target.val>=head.next.val && head.next!=target) head = head.next;
    return head;
}