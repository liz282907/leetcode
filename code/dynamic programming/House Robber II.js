/**
 * Note: This is an extension of House Robber.

After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Credits:
Special thanks to @Freezen for adding this problem and creating all test cases.

Subscribe to see which companies asked this question.
 */
/**
 * @param {number[]} nums
 * @return {number}
 * 思路，如果抢第一家，那么就不能抢最后一家，如果抢最后一家，就不能抢第一家，因此变为两种选择中找最大的值。
 * 两次复用rob的函数。
 * 注意边界条件，只有一家的情况，在代码里面会slice变为空，为0，但实际上结果应该是nums[0]
 */
var rob = function(nums) {
	if(nums.length<1) return 0;
	if(nums.length===1) return nums[0];       //
    var choice1 = robFrom(nums.slice(1)), //不包括第一家
		arr = nums.slice(0,nums.length-1), //选择第一家，不包括最后一家
		choice2 = robFrom(arr);
	return Math.max(choice1,choice2);



    function robFrom(nums){
        if (nums.length <= 0) return 0;

        var result = [nums[0]];
        result[1] = Math.max(nums[0], nums[1]); //注意！这边不能直接是nums[1]
        for (var i = 2; i < nums.length; i++) {
            console.log(result)
            result[i] = Math.max(nums[i] + result[i - 2], result[i - 1]);
        }

        return result[nums.length - 1];
    }
};
