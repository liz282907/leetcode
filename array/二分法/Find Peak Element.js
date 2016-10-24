/**
 * @param {number[]} nums
 * @return {number}
  注意点：边界条件。mid===0或者mid===nums.length时左右会越界。需要另行判断。

思路：找到中间节点mid，如果大于两边返回当前index就可以了，如果左边的节点比mid大，那么我们可
以继续在左半区间查找，这里面一定存在一个peak，为什么这么说呢？假设此时的区间范围为[0, mid -
1]， 因为num[mid - 1]一定大于num[mid]了，如果num[mid - 2] <= num[mid - 1]，那么num[mid - 1]就是一
个peak。如果num[mid - 2] > num[mid - 1]，那么我们就继续在[0, mid - 2]区间查找，因为num[-1]为负无
穷，所以最终我们绝对能在左半区间找到一个peak。同理右半区间一样。
 */
var findPeakElement = function(nums) {
    var i = 0,j = nums.length-1;
    while(i<j){
        var mid = Math.floor((i+j)/2);
        // if(mid===0)
        if(mid===0) if(nums[mid]>nums[mid+1]) return mid;
        if(mid===nums.length-1) if(nums[mid]>nums[mid-1]) return mid;
        if(nums[mid]>nums[mid+1] && nums[mid]>nums[mid-1]) return mid;

        if(nums[mid-1]>=nums[mid]) j = mid-1;
        // else if(nums[mid+1]>=nums[mid]) i = mid+1;
        else  i = mid+1;
    }
    return i;
};