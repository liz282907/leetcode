/**
 * Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3
Note:
You may assume that the array does not change.
There are many calls to sumRange function.
Subscribe to see which companies asked this question.
 */
/**
 * @param {number[]} nums
 * 还没有写完...没有太看明白题目意思...
 */
var NumArray = function(nums) {
	var self = this;
    this.createNew = function(nums){
    	self.arr = [].concat(nums);
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	var result = 0
    for(var index = i;index<=j;index++){
    	result += this.arr[index];
    }
    return result;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */