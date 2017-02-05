/**
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 思路：从右到左搜索，找到第一个违背降序排列的元素。比如3,1,4,3,2 的1,那么表明后面已经是最大的了。需要对1进行更换。
  然后对右边排序。降序数组变为升序排列，用左右夹逼交换即可。
 */
var nextPermutation = function(nums) {

    var i=nums.length-1,j = i;
    //降序排列的数组，左边一个数字即为要更改的部分。
    while(nums[i-1]>=nums[i]) i--;
    var baseIndex = i-1;

    //对右边排序。降序数组变为升序排列，用左右夹逼交换即可。
    while(i<j && i>=0){
        swap.call(nums,i,j);
        i++;
        j--;
    }

    //排序后找到第一个比baseIndex大的进行交换。交换需要注意baseIndex是否是数组以内的
    if(baseIndex>=0){
        i= baseIndex+1;
        while(nums[i]<=nums[baseIndex])
            i++;
        swap.call(nums,i,baseIndex);
    }


};


function swap(i,j){
    var temp;
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
    return this;
}