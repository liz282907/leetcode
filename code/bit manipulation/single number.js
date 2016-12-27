/**
 * Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Subscribe to see which companies asked this question
 * @param {number[]} nums
 * @return {number}
 * 思路： 因为 a^a = 0,最终double的数字都会没有了，只剩下那个单独的
 */
var singleNumber = function(nums) {
    if(!nums.length) return 0;
    var result = nums[0];
    for(var i=1;i<nums.length;i++){
        result = result ^ nums[i];
    }
    return result;
};