/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Credits:
Special thanks to @ifanchu for adding this problem and creating all test cases. Also thanks to @ts for adding additional test cases.

Subscribe to see which companies asked this question.
[2,1,1,2]
思路，朴素的动态规划...result[i] = Math.max(nums[i]+result[i-2],result[i-1]);
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    
    if(nums.length<=0) return 0;

    var result = [nums[0]];
    result[1] = Math.max(nums[0],nums[1]);      //注意！这边不能直接是nums[1]
    for(var i=2;i<nums.length;i++){
    	console.log(result)
    	result[i] = Math.max(nums[i]+result[i-2],result[i-1]);
    }

    return result[nums.length-1];
};