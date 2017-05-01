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
 * 注意： 这边没有考虑负数，如果考虑负数的话，应该用无符号右移（有符号右移>>是保留符号位，然后其他右移，因此对于负数会
 * 无限循环下去，因此要用>>>,见解法三）
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

//无符号右移
function NumberOf1(n)
{
    var count = 0;
    while(n!==0){
        if(n&1===1) count++;
        n = n>>>1;
    }
    return count;
}

//还要一种方法是： n&(n-1)会把最右边的1变为0

function NumberOf1(n)
{
    var count = 0;
    while(n){
        count++;
        n = n&(n-1);
    }
    return count;
}