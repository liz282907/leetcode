/**
 * Given an integer, write a function to determine if it is a power of two.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0) return false;

    while(n>=2){
    	n = n/2;     //注意这边不能为n>>1,因为会默认取整
    }
    return parseInt(n)===n;
};

//思路2： 用之前 n&(n-1) 的trick, power of 2表明 只有一个1
//
var isPowerOfTwo = function(n) {
    if(n<=0) return false;

    return !(n&(n-1)); //注意括号
};