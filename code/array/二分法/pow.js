/**
 * Implement pow(x, n).

Subscribe to see which companies asked this question.
 * @param {number} x
 * @param {number} n
 * @return {number}
 * test case: 34.00515 -3
 * 注意 n为负数的情况，
 * 思路是： 二分动态规划，n分奇偶数情况 x^n = x^(n/2) * x^(n/2) ||  x^n = x^(n/2) * x^(n/2) *x
 */
var myPow = function(x, n) {
	var dic = [];
	dic[0] = 1;
	dic[1] = x;

	if(n>=0) return pow(x,n);
	if(n<0) return 1/pow(x,Math.abs(n))
    
    function pow(x,n){
    	if(n<=1 && n>=0) return dic[n];

    	var half = Math.floor(n/2);
		var child = pow(x,half);
    	dic[n] = child*child;
    	if(n%2===1) dic[n] *= x;

    	return dic[n];
    }
};