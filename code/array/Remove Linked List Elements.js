/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 思路，跟数组那题@removeElement差不多，两种方法，arr[index]++ = 不重复的数值；左边替换为右端数据
 */
var removeElements = function(head, val) {
    var mock = new ListNode(0);
    mock.next = head;

    var prev = mock,cur = head;
    while(cur){
        if(cur.val===val){
            prev.next = cur.next;
            cur = cur.next;
        }else{
            prev = cur;
            cur = cur.next;
        }
    }
    return mock.next;
};


function ListNode(val) {
     this.val = val;
     this.next = null;
}