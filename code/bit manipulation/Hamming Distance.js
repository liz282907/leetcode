/**
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

 */
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 * 送分题...过，下一题
 */
var hammingDistance = function(x, y) {
	var count = 0;
    while(x>=1 || y>=1){
    	count += (x&1) ^ (y&1);
    	x = parseInt(x/2);
    	y = parseInt(y/2);
    }
    return count
};