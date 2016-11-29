/**
此类题型用二分法处理。是在常用的二分基础上进行变换。

*/
//基础版本
function twoPartSearch(nums,target){
    var i = 0,
        j = nums.length - 1;
    var oneIndex = -1;
    while (i <= j) {
        var mid = Math.floor((i + j) / 2);
        if (nums[mid] < target)
            i = mid + 1;
        else if (nums[mid] > target)
            j = mid - 1;
        else {
            oneIndex = mid;
            break;
        }
    }
    return oneIndex;
}
//version2
/**
这个版本可以有多个功能：
1. 在target存在时找到值的index. 且在有多个重复值时找到从左到右第一次出现的index
2. 在target不存在的时候找到插值位置
*/
function twoPartSearch(nums,target){
    var i = 0,
        j = nums.length;     //1.一定不能忘了这边不是nums.length-1.因为会遇到[2].找5的情况。循环都进不了。
    var oneIndex = -1;
    while (i < j) {           //2
        var mid = Math.floor((i + j) / 2);
        // [1,2,4]中找3,且此时nums[mid]为2时，i = mid = 1,j = 2。然后i = j = mid = 2
        if (nums[mid] < target)
            i = mid + 1;
        else
            j = mid;
    }
    return i;
}
//变种： findMinimum。
/**
这个时候 nums[mid]需要跟nums[j]进行比较。因为对于no duplicate的情况, mid永远不可能===j（在循环中）
那么就不需要考虑nums[mid]===nums[j]的情况。而如果跟i比较的话。降序数组或者升序数组都会使得if(===)被否认。
*/
