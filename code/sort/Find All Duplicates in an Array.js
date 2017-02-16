/**
 * Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
Subscribe to see which companies asked this question.

Show Tags
Show Similar Problems

 */
/**
 * @param {number[]} nums
 * @return {number[]}
 * related problem : 
 * find all numbers disappered in an array
 * find first missing possitive
 * //题目跟find all numbers disappered in an array几乎一毛一样，只不过一个是缺少，一个是重复...= =
    } 
 */
var findDuplicates = function(nums) {
    var result = [],
    	len = nums.length;
    for(var i=0;i<len;i++){
    	while(nums[i]!==(i+1) ){
    		if(nums[i]<1 || nums[i]>len || nums[i]===nums[nums[i]-1]) break;
    		else swap(nums,i,nums[i]-1);
    	}
    }
    for(i=0;i<len;i++){
    	if(nums[i]!== (i+1)) result.push(nums[i]);  // 与位置不符合的就是重复的
    return result;
	
	function swap(nums,i,j) {
		var temp = nums[j];
		nums[j] =  nums[i];
		nums[i] = temp; 
	}
};