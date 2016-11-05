/**
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
the contiguous subarray [4,-1,2,1] has the largest sum = 6.
思路： 看之前的subArray对本元素的贡献，如果sum>=0，则将本元素继续添加进去，否则另开一个数组，舍弃原来的部分。
每一个元素都维护一个自己的max sum arr,然后对n个数遍历，谁的max sum arr的sum最大，就取谁的。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var curArr = [],lastSum = 0,resultArr = [];
    for(var i=0;i<nums.length;i++){
        if(lastSum>=0) {
            curArr.push(nums[i]);
            lastSum+= nums[i];
        }
        else{
            curArr = [nums[i]];
            lastSum = nums[i];
        }
        resultArr[i]= lastSum;
    }
    var result = Number.NEGATIVE_INFINITY;
    for(i=0;i<nums.length;i++){
        if(result < resultArr[i]) result = resultArr[i];
    }
    return result;

};

/*

var maxSubArray = function(nums) {
    var curArr = [],lastSum = 0,resultArr = [];
    for(var i=0;i<nums.length;i++){
        if(lastSum>=0) {
            curArr.push(nums[i]);
            lastSum+= nums[i];
        }
        else{
            curArr = [nums[i]];
            lastSum = nums[i];
        }
        resultArr[i]= lastSum;
    }
    var result = Number.NEGATIVE_INFINITY;
    for(i=0;i<nums.length;i++){
        if(result < resultArr[i]) result = resultArr[i];
    }
    return result;
};


*/
