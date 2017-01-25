/**
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.

Subscribe to see which companies asked this question
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 思路：排序后返回
 */
var findKthLargest = function(nums, k) {
    quick_sort(nums,0,nums.length-1);
    return nums[k-1];

    function quick_sort(nums,start,end){
        var pivot = findMedian(nums,start,end);
        var insertIndex  = partition(nums,pivot,start,end);
        swap(nums,insertIndex,end-1);
        quick_sort(nums,start,insertIndex-1);
        quick_sort(nums,insertIndex+1,end);
    }
    function findMedian(nums,start,end){
        var middle = start+ Math.floor((end-start)/2);
        if(nums[start]>nums[middle]) swap(nums,start,middle);
        if(nums[start]>nums[end]) swap(nums,start,end);
        if(nums[middle]>nums[end]) swap(nums,middle,end);

        swap(nums,middle,end-1);
        return nums[end-1];
    }
    function partition(nums,pivot,start,end){
        while(start<end){
            while(nums[start]<pivot) start++;
            while(nums[end]>pivot) end--;
            swap(nums,start,end);
        }
        return start;
    }
};

function swap(nums,i,j){
    var temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
}