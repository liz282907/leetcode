/**
 * /**
 * Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Subscribe to see which companies asked this question.
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	var dict = {}
    for(var i=0;i<nums.length;i++){
    	if(!dict[nums[i]]) dict[nums[i]] = true;
    	else return true
    }
	return false
};
 