/*function ListNode(x){
    this.val = x;
    this.next = null;
    输入一个链表，从尾到头打印链表每个节点的值
    思路： 递归
}*/
function printListFromTailToHead(head)
{
	var result = [];
	recursion(head,result);
	return result;

    function recursion(head,result){
    	if(!head) return
    	recursion(head.next,result)
    	result.push(head.val)
    }
}

//循环解法
function printListFromTailToHead(head)
{
	var result = [];
	if(!head) return result;
	while(head){
		result.unshift(head.val);
		head = head.next;
	}
	return result;
}

module.exports = {
    printListFromTailToHead : printListFromTailToHead
};