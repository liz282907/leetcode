/**
 * @param {number[]} nums
 * @return {number}
 Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.

Subscribe to see which companies asked this question

similar problem: maximum sum subarray
因为会涉及到负数的问题，因此在maximum sum array的基础上，需要保存一个最小值
 */
var maxProduct = function(nums) {

    var maxArr = [nums[0]];
    var minArr = [nums[0]];
    for(var i=1;i<nums.length;i++){

        maxArr[i] = Math.max(
            maxArr[i-1]*nums[i],
            nums[i],
            minArr[i-1]*nums[i]
        );
        minArr[i] = Math.min(
            maxArr[i-1]*nums[i],
            nums[i],
            minArr[i-1]*nums[i]
        );
    }

    return Math.max.apply(null,maxArr); // null别忘了

};