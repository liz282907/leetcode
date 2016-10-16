/*
problem:
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

Subscribe to see which companies asked this question
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
 *思路一：从第二个开始与前一个比较，如果不相同则放进原数组，最后需要数组splice
 */
var removeDuplicates = function(nums) {

	var index = 1,length = nums.length;
	for (var i = 1;i<length;i++) {
		if(nums[i]!==nums[i-1])          //这边实际上也是nums[i]!=nums[index-1]
			nums[index++] = nums[i];
	}
	//nums.splice(index,length-index);
	return index;
}

/**
* 思路二：本来是想类似于removeElement的思路，但是不行，因为target并不是定值，会
*造成排序错乱，的问题。如[1,1,1,2] 一次后[1,2,1,2],target = 2，i = j =2. 会误判，会使重复的留下
*/
