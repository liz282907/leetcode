/**
 * Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
Subscribe to see which companies asked this question.
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 * 思路： 原地hash交换，题目跟first missing possitive差不多
 */
var findDisappearedNumbers = function(nums) {
    var result = [],
    	len = nums.length;
    for(var i=0;i<len;i++){
    	while(nums[i]!==(i+1) ){
    		if(nums[i]<1 || nums[i]>len || nums[i]===nums[nums[i]-1]) break;
    		else swap(nums,i,nums[i]-1);
    	}
    }
    for(i=0;i<len;i++){
    	if(nums[i]!== (i+1)) result.push(i+1);
    }
    return result;
	
	function swap(nums,i,j) {
		var temp = nums[j];
		nums[j] =  nums[i];
		nums[i] = temp; 
	}

};