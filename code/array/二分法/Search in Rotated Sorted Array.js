/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 /**
 划归为二分查找值，那么前提就是有序。因为要找到index.那么两种思路，
 一种是存储原始index。然后排序数组，但这样貌似除非排序算法为lgn，要不然时间复杂度会为O(n).跟遍历查找有什么区别=。=
 另一种思路就是。先找到minimum。然后利用这个index将数组分为两半。在其中一半里面去找target
 */
var search = function(nums, target) {
    var i = 0,j = nums.length-1;
    var mid;
    while(i<j){
        mid = Math.floor((i+j)/2);
        if(nums[j]<nums[mid]) i = mid+1;
        else j = mid;
    }
    var minIndex = i;
    if(nums.slice(-1)>=target) {
        j = nums.length-1;
        i = minIndex;
    }
    else{
        i = 0;
        j = minIndex-1;
    }
    j+=1;
    while(i<j){
        mid = Math.floor((i+j)/2);
        if(nums[mid]<target) i = mid+1;
        else j = mid;
    }
    if(nums[i] !== target) return -1;
    else return i;
};