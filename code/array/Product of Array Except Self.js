/**
 * Product of Array Except Self
 * Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6]. [0,0]

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

Subscribe to see which companies asked this question.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 * 思路，左右两边各遍历一遍。 即 result[i]先存放 到result[i-1]的乘积。
 * 然后从右到左，result *= 右边到左边的乘积（即right）
 */
var productExceptSelf = function(nums) {
    if(nums.length<=0) return [];

    var len = nums.length,result = [1];
    for(var i=1;i<len;i++){
    	result[i] = result[i-1]*nums[i-1];
    }
    var right = nums[len-1];       
    for(i=len-2;i>=0;i--){
    	result[i] = result[i]*right;
    	right = right * nums[i];
    }
    return result;
};