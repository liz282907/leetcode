/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 /**
没有ac
 */
var search = function(nums, target) {
    var i = 0,j = nums.length-1;
    var mid;
    while(i<j){
        mid = Math.floor((i+j)/2);
        if(nums[j]<nums[mid]) i = mid+1;
        else if(nums[j]>nums[mid]) j = mid;
        else j--;
    }
    var minIndex = i;
    var boundY = j;
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