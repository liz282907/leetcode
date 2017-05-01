/**
 * Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
For num = 5 you should return [0,1,1,2,1,2].

Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
Credits:
Special thanks to @ syedee for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

 */
/**
 * @param {number} num
 * @return {number[]}
 * 思路： 动态规划，同时保存数组，主要是记住那些power of 2的位置
 *
 * 比如 5： 上一个2的幂是4，那么就应该在4的基础上（1）加上gap的值（1），12 = 8 +4,因为之前保存了，所以直接相加即可
 * 
 * 其实类似的动态规划入手点还有很多，只要映射到之前的即可，比如arr[i&(i-1)]+1, 因为i&(i-1)把最后的1给去除掉了，那么只要再加一个就好
 */
var countBits = function(num) {
    if(num===0) return [0]
    var arr = [0,1],lastPowOf2 = 1;
    for(var i=2;i<=num;i++){
    	if(i===lastPowOf2*2){
    		lastPowOf2 = i;
    		arr[i] = 1;
    	}
    	else{
    		var gap = i-lastPowOf2;
    		arr[i] = arr[lastPowOf2] + arr[gap]
    	}
    }
    return arr;
};