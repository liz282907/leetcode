/**
 * Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

click to show follow up.

Subscribe to see which companies asked this question
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 题目中给了一个two pass的解法： 首先遍历数组，分别得到0,1,2的数目，然后根据这个数目fill array。
 * 这边的思路是，维持三个指针，i用来遍历数组，left,right用来存放0,1。
 * 另外，后来看了下结题报告，还有一种借助快排partition的方法,米有看懂。虽然我觉得跟指针的方法差不多...
 *
 *
 *
 */
var sortColors = function(nums) {
    var left=0,right=nums.length-1;

    for(var i=0;i<=right;){ //别忘了等号，否则最后一个元素可能不被访问到
        if(nums[i]===0) swap(nums,i++,left++)
        else if(nums[i]===2) swap(nums,i,right--) //注意这边i不能++，因为交换过来以后，对nums[i]其实还是不信任需要再判断的。
        else i++;
    }
};

function swap(nums,i,j){
    var temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
}