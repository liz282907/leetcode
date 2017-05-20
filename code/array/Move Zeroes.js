/**
 * Move Zeroes
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 思路： in-place重建数组
 */
var moveZeroes = function(nums) {
	var len = nums.length,index = 0;
    for(var i=0;i<len;i++){
    	if(nums[i]!==0) nums[index++] = nums[i];
    }
    while(index<=len-1){
    	nums[index++] = 0;
    }
};