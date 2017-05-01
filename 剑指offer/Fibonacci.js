/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。
n<=39
 * @param {[type]} n [description]
 *   1,1,2,3，注意n===0的时候
 */
function Fibonacci(n)
{
	if(n<=0) return 0;
	if(n===1) return 1;
    var arr = [1,1];     //0,1,2,3

    for(var i=2;i<=n;i++){
    	arr[i] = arr[i-1]+arr[i-2]
    }
    return arr[n-1];
}
module.exports = {
    Fibonacci : Fibonacci
};