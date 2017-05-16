/**
 * Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.

click to show more practice.

Credits:
Special thanks to @Freezen for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 * 思路： 简单粗暴...从当前i开始，找连续的seq的sum,一旦大于，就更新count，
 * 注意剪枝跟最后的count是否存在的判断
 */
var minSubArrayLen = function(s, nums) {
	var count = Number.POSITIVE_INFINITY,len = nums.length;
    for(var i=0;i<len;i++){
    	var sum = 0,_count = 0;
    	for(var j=i;j<len;j++){
    		sum += nums[j];
    		_count++;
    		if(_count>=count) break;     //剪枝
    		if(sum>=s) {
    			count = Math.min(count,_count);
    			break;
    		}
    	}
    }
    return count!==Number.POSITIVE_INFINITY? count: 0; //注意
};