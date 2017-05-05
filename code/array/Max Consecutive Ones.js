/**
 * Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

 */
/**
 * 思路： 最长连续系列的通俗解法= =，可以勉强的认为是动态规划，即当前是否加入last还是新开数组
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var count = 0,last = 0,maxCount = 0,
    	len = nums.length;
    for(var i=0;i<len;i++){
    	if(nums[i]===1) count++;     //需要加if的判断，testcase: [0]
    	var equal;
    	if(i===len-1) equal = false;
    	else equal = nums[i]==nums[i+1];
    	
    	if(!equal){
    		maxCount = Math.max(maxCount,count);
    		count = 0;
    	}
    }
    return maxCount;
};

//思路： 动态规划
var findMaxConsecutiveOnes = function(nums) {
	 if(nums.length<=0) return 0;
    var result = [nums[0]],len = nums.length,maxCount = nums[0]; //注意初始化值，特别是result跟maxCount
    for(var i=1;i<len;i++){
    	if(nums[i]===1) result[i] = result[i-1]+1;
    	else result[i] = 0;
    	maxCount = Math.max(maxCount,result[i]);
    }
    return maxCount;
};