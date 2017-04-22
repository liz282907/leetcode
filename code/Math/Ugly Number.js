/**
 * Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    var factors = [2,3,5]

    for(var i=0;i<factors.length;i++){
		var factor = factors[i];
		while(num%factor===0 && num!==0) num /= factor //边界条件： num不为0
    }
    return num===1;
};