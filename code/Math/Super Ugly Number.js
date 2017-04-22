/**
 * Write a program to find the nth super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k. For example, [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32] is the sequence of the first 12 super ugly numbers given primes = [2, 7, 13, 19] of size 4.

Note:
(1) 1 is a super ugly number for any given primes.
(2) The given numbers in primes are in ascending order.
(3) 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
(4) The nth super ugly number is guaranteed to fit in a 32-bit signed integer.

Credits:
Special thanks to @dietpepsi for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */
/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 * 思路： 同ugly number2一样，维持一个长度为primse.length的pointer数组，每个值指向一个位置，下一个suPer ugly就是用该位置的值去乘以
 * 相应的prime, 所有pointer指向的可能数中的最后一个。
 */
var nthSuperUglyNumber = function(n, primes) {
    var result = [1],pointerArr = [];

    var len = primes.length;
    for(var j=0;j<len;j++) pointerArr[j] = 0;

    for(var i=1;i<n;i++){
    	var min = Number.POSITIVE_INFINITY;
    	for(j=0;j<len;j++){
    		var possibleValue = primes[j]*result[pointerArr[j]];
    		min = Math.min(possibleValue,min);
    	}
    	for(j=0;j<len;j++){
    		if(min===primes[j]*result[pointerArr[j]]) pointerArr[j]++; //注意是里面的pointer++
    	}
    	result[i] = min;
    }
    return result[n-1];

};