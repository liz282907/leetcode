/**
 * Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 * 注意hamming weight 跟hamming distance 的定义 
 * 思路： 数转变为二进制的过程中，同时计算1的个数。
 */
var hammingWeight = function(n) {
	var count = 0;
    while(n>=1){
    	var modValue = n%2;
    	if(modValue===1) count++;
    	n = parseInt(n/2);
    }
    return count
};

//更简便的写法
var hammingWeight = function(n) {
	var count = 0;

    while(n>=1){
    	count += n&1;
    	n = parseInt(n/2);
    }
    return count
};