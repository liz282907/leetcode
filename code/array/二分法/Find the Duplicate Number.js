/**
 * Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Note:
You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.
Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 最naive的方法就是二重循环
 */
var findDuplicate = function(nums) {
	var count=0,len = nums.length;
    for(var i=1;i<= len-1;i++){
    	count = 0;
    	for(var j=0;j<len;j++){
    		if(nums[j]===i) count++;
    	}
    	if(count>1) return i;
    }
};

/**
 * method2 上面是O（n^2）的时间复杂度，这边也可以考虑内层循环用divider and conquer，。。。sad 超时了。not ac
 * @param  {[type]} nums [description]
 * @return {[type]}      [description]
 */
var findDuplicate = function(nums) {
	var count = 0,len = nums.length;
    for(var i=1;i<= len-1;i++){
    	count = countTarget(nums,0,len-1,i);
    	if(count>1) return i;
    }

    function countTarget(nums,i,j,target){
		if(i>j || i===j && nums[i]!==target) return 0;
		if(i===j && nums[i]===target) return 1;

		var mid = Math.floor((i+j)/2);
		return countTarget(nums,i,mid,target) + countTarget(nums,mid+1,j,target);
	}
};

/**
 * 让我们换一种二分的思路，二分的关键在于找到一个确切的有序数组及中间的mid
 */
var findDuplicate = function(nums) {
	var count = 0;
	var low = 1, high = nums.length-1,mid;
	while(low<high){
		mid = mid = Math.floor((low+high)/2);
		count = countTarget(nums,mid);
		if(count>mid) high = mid;
		else low = mid+1;
	}
	return low;
    function countTarget(nums,target){
    	var count = 0;
		for(var i=0;i<nums.length;i++){
			if(nums[i]<=target) count++;
		}
		return count;
	}
};

/**
 * index->value->index构成的链表，寻找环入口，具体讲解可以看discuss或者这篇https://segmentfault.com/a/1190000003817671
 * @param  {[type]} nums [description]
 * @return {[type]}      [description]
 */
var findDuplicate = function(nums) {
	var fast = 0,slow = 0,extent = nums.length-1;
	while(true){
		fast = nums[nums[fast]];
		slow = nums[slow];
		if(fast==slow) break;
	}
	if(fast>extent) return -1;
	fast = 0;
	while(fast!==slow){
		fast = nums[fast];
		slow = nums[slow];
	}
	return slow;
};
