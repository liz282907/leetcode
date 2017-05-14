/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如
 * 序列1,2,3,4,5是某栈的压入顺序，
 * 序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
 * 但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
 * 思路是，新建一个辅助数组arr,然后遍历pop数组，如果当前arr.top不是pop[i],那么就一直push数字进arr去，直到遇到arr.top===pop[i]
 * 如果一直到pushV全shift掉了，还没找到，并且top不等，那么就说明不可能。(因为要pop的始终只可能是top及top以后要压栈的元素。这是关键点)
 * 如果中途找到了，那么就pop,进行下一个pop[i]的判断。
 * 
 */

function IsPopOrder(pushV, popV)
{
	var arr = [];
    for(var i=0;i<popV.length;i++){
        var cur = popV[i],top;
        while(!arr.length || (top=arr.slice(-1)[0])!==cur){
            if(!pushV.length) break;          //注意终止条件，否则会死循环下去。
            arr.push(pushV.shift());
        }
        if(!pushV.length && top!==cur) return false;   //关键的判断
        arr.pop();
    }
    return true;
}
module.exports = {
    IsPopOrder : IsPopOrder
};