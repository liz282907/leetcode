/**
 * Description:

Count the number of prime numbers less than a non-negative number, n.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var count = 0;
    for(var i=2;i<n;i++){
    	if(isPrime(i)) count++;
    }
    return count;

    function isPrime(n){
        if(n<2) return false;
    	if(n===2 || n===3) return true;
    	for(var i=2;i<=Math.floor(Math.sqrt(n));i++){
    		if(n%i===0) return false;
    	}
    	return true;
    }
};