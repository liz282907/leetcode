/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的min函数
 * 思路： 因为要保证array的特性即pop,push的fifo，所以不能排序。
 * 然后当当前最小值pop出去以后，应该下一次得到的是当前次小的值。那么应该维持一个minArr数组，存放的是当前数组的最小值，
 * 与array数组一一对应。
 */

var array = [],minArr = [];
function push(node)
{
    array.push(node);
    if(!minArr.length) minArr.push(node);
    else{
        var curMin = Math.min(minArr.slice(-1)[0],node);
        minArr.push(curMin);
    }
}
function pop()
{
    if(!array.length ||!minArr.length) return;
    var result = array.pop();
    minArr.pop();
    return result;
}
function top()
{
    return array.slice(-1)[0];
}
function min()
{
    if(!minArr.length)return;
    else return minArr.slice(-1)[0];
}
module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};