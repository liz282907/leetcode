/*
problem:
Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:
Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 /*
 思路1： 用remove duplicated from sorted array的思路，从0开始遍历，如果不相同，则放入数组。
 */
var removeElement = function(nums, val) {
	var index = 0;
	for(var i=0;i<nums.length;i++){
		if(nums[i]!==val)
			nums[index++] = nums[i];
	}
	return index;
};

 /*
 思路2：从第1个开始，如果是要删除的重复元素，则把最右边的放进来
 其实跟思路一一样，只不过一个是判断不同保留*/
var removeElement = function(nums, val) {
	var last = nums.length-1;
	for(var i=0;i<=last;){
		if(nums[i]===val){
			nums[i] = nums[last];
			last -=1;
		}else
			i++;

	}
	return i;
};