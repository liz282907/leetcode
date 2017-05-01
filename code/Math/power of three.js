/**
 * Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?

Credits:
Special thanks to @dietpepsi for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 * @param {number} n
 * @return {boolean}
 * 思路： 取对数，结果应该为整数，
 */
var isPowerOfThree = function(n) {
	if(n<=0) return false;
	var lgResult = Math.log10(n)/Math.log10(3);
    return parseInt(lgResult)===lgResult;
};