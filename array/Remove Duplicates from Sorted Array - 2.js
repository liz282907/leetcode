/*
problem:
Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.

Subscribe to see which companies asked this question
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
 1,1,1,2,2
 *思路一：从第三个开始与n-2个比较，
 注意，这边一定要是删除后的数组的n-2进行比较。如果不相同则放进原数组，最后需要数组splice
 */
var removeDuplicates = function(nums) {

	var index = 2,length = nums.length;
	for (var i = 2;i<length;i++) {
		if(nums[i]!==nums[index-2])
			nums[index++] = nums[i];
	}
	//nums.splice(index,length-index);
	return index;
}