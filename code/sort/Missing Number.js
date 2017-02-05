/*
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 思路： first missing positive的简化版本
 */
var missingNumber = function(nums) {
    for(var i=0;i<nums.length;i++){
        while(nums[i]!==i){
            if(nums[i]>=nums.length) break;
            else swap(nums,i,nums[i]);
        }
    }
    for(i=0;i<nums.length;i++){
        if(nums[i]!==i) return i;
    }
    return nums.length;

    function swap(nums,i,j){
        var temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }
};