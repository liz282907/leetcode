/**
 * The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Now your job is to find the total Hamming distance between all pairs of the given numbers.

Example:
Input: 4, 14, 2

Output: 6

Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case). So the answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
Note:
Elements of the given array are in the range of 0 to 10^9
Length of the array will not exceed 10^4.
Subscribe to see which companies asked this question.
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 思路： 对每一位（按32位计算），统计当前位上的1，0的个数m,n，因此该位上的差异数为m*n,然后把所有位上的相加即可
 * 时间复杂度： O(n)，空间： O(1)
 */
var totalHammingDistance = function(nums) {
    var len = nums.length,sum = 0;
    for(var i=0;i<32;i++){
    	var countBit1 = 0;
    	for(var j=0;j<len;j++){
    		countBit1 += (nums[j] >> i & 1)
    	}
    	sum += (countBit1*(len-countBit1))
    }
    return sum;
};