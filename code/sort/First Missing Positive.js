/**
 * Given an unsorted integer array, find the first missing positive integer.

For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.       ->[1,4,-1,3]

Your algorithm should run in O(n) time and uses constant space.

Subscribe to see which companies asked this question

Show Tags
Show Similar Problems

 */
/**
 * @param {number[]} nums
 * @return {number}
 * 前期题目： missing number .思路： 原地交换的桶排序
 * 使得 nums[i] = i+1
 *   index 0 1 2 3
 *   value 1 2 3 4
 */
var firstMissingPositive = function(nums) {

    if(!nums.length) return 1;
    function swap(nums,i,j){
        var temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }
    for(var i=0;i<nums.length;i++){
        while(nums[i]!==(i+1)){
            //负数，或者要交换的越界，或者要形成死循环的（如[2,2]）都break掉。
            //否则对 i与nums[i]-1 进行交换
            if(nums[i]<=0 || nums[i]>nums.length || nums[i] == nums[nums[i] - 1]) break;
            else swap(nums,i,nums[i]-1);
        }
    }
    for(i=0;i<nums.length;i++){
        if(nums[i]!==(i+1)) return i+1;
    }
    //每个都有，那么直接返回顺次下来的下一位即可，如[1,2,3]返回4即可
    return nums.slice(-1)[0]+1;

};