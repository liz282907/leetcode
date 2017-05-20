/**
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

Subscribe to see which companies asked this question.
 */

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 * 思路，hash，首先按照常规方法遍历复制一遍原链表。但同时记录每个节点与新节点的映射关系（放到map里面。因为map里面可以放值-值，即key可以为对象）
 * 而且不用担心后面对象被重写的问题。重写后就是不同的对象了，那么再map.set的话就是另一个键值了。
 * 然后再遍历一遍原链表，去复制里面的random.即 找到当前node对应的newNode, 然后找到node.random对应的 newRandom。然后挂上去。
 * 需要注意的点是，如果random是null的话。就不用再去map.get了。直接null就行。
 */
var copyRandomList = function(head) {
    var dummy = new RandomListNode(-1),prev,newPrev,map = new Map();
    prev = head;
    newPrev = dummy;
    while(prev){
    	var node = new RandomListNode(prev.label);
    	node.next = null;
    	newPrev.next = node;
    	map.set(prev,node);
    	newPrev = node;
    	prev = prev.next;
    }
    prev = head;
    while(prev){
    	var mapPrev = map.get(prev); //对应的新链表上的节点
    	if(!prev.random) mapPrev.random = null;           //attention！
    	else mapPrev.random = map.get(prev.random);
    	prev = prev.next;
    }
    return dummy.next;

};

//思路2：楼主在剑指offer上看到的一个思路。大体上是先把复制的节点都放到原节点后面。然后random就可以立刻找到了，因为就在原random的后面。然后再
//拆分链表。
//还是要注意prev.random为null的情况！

var copyRandomList = function(head) {
    var dummy = new RandomListNode(-1),prev,newPrev;
    prev = head;
    newPrev = dummy;
    while(prev){
    	var next = prev.next;
    	var node = new RandomListNode(prev.label);
    	node.next = prev.next;
    	prev.next = node;
    	prev = next;
    }
    prev = head;
    while(prev){
    	if(!prev.random) prev.next.random = null;   //attention!!!
    	else prev.next.random = prev.random.next;
    	prev = prev.next.next;
    }
    prev = head;
    while(prev){
    	newPrev.next = prev.next;
    	prev.next = prev.next.next;
    	prev = prev.next;
    	newPrev = newPrev.next;
    }
    return dummy.next;
};











