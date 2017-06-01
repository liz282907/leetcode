/**
 * 注意，判断条件得放在while的表达式中。不能这么写
 * while(true){
 * 		if(..)
 *
 * 		if(prev1===prev2) break;
 * }
 * 这样会错遇过这种情况，就是第一个数就是公共节点，那么就会跳过。
 */

var getIntersectionNode = function(headA, headB) {
    if(!headA  || !headB) return null;
	var preA = headA,preB = headB;
	while(preA!==preB){
		if(!preA) preA = headB;
		else preA = preA.next;
		if(!preB) preB = headA;
		else preB = preB.next;
	}
	return preB;
};