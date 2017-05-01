/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 * @param  {[type]} number [description]
 * @return {[type]}        [description]
 * 如果横向填充的话， 只要计算f(n-1)。如果竖向填充的话，只能两个竖的填充以后，剩下f(n-2)(即n-2的高度)填充。因此
 * 还是斐波那契
 * ————
 * ————|
 * ————|
 * 
 */
function rectCover(number) {
    if(number<=0) return 0;
	if(number<=2) return number;
    var result = [1,2];
    for(var i=3;i<=number;i++){
    	result[i-1] = result[i-2]+result[i-3];
    }
    return result[number-1];
}
module.exports = {
    rectCover: rectCover
};
