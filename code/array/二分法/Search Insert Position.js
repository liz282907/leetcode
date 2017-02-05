/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var i = 0,
        j = nums.length;
    while(i<j){
        var mid = Math.floor((i+j)/2);
        if(nums[mid]<target)
            i = mid+1;
        else
            j = mid;
    }
    return i;
};